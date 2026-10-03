import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  query,
  where,
  orderBy,
  updateDoc,
  deleteDoc,
  serverTimestamp
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyB-P1gnh6jiixEQnvZpMtl7yL6BCwaDUsE",
  authDomain: "applied-firebase.firebaseapp.com",
  databaseURL: "https://applied-firebase-default-rtdb.firebaseio.com",
  projectId: "applied-firebase",
  storageBucket: "applied-firebase.firebasestorage.app",
  messagingSenderId: "839828761889",
  appId: "1:839828761889:web:acecbec8b32455d273e260"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function createUser(user) {
	const ref = await addDoc(collection(db, 'users'), {
		...user,
		created_at: serverTimestamp()
	});
	return ref.id;
}

async function getUser(userId) {
	const snapshot = await getDoc(doc(db, 'users', userId));
	if (snapshot.exists()) {
		return snapshot.data()
	}
	return null;
}

async function createConcept(userId, concept, reviewTimes) {
	const ref = await addDoc(collection(db, 'concepts'), {
		user_id: userId,
		...concept,
		created_at: serverTimestamp()
	});
	// finish by making notifications
	const notificationsRef = collection(db, 'concepts', ref.id, 'notifications');
	for (const days of reviewTimes) {
		let date = new Date();
		date.setDate(date.getDate() + days);
		await addDoc(notificationsRef, {
			concept_id: ref.id,
			reminder_time: date,
			past_due: false,
			reviewed: false
		})
	}
	return ref.id;
}

async function getConcepts(userId) {
	const q = query(
		collection(db, 'concepts'),
		where("user_id", "==", userId),
		orderBy("created_at", 'desc')
	);
	const snapshot = await getDocs(q);
	return snapshot.docs.map(document => document.data());
}

async function updateConcept(conceptId, newData) {
	await updateDoc(doc(db, 'concepts', conceptId), {
		...newData
	});
}

async function deleteConcept(conceptId) {
	const q = query(
		collection(db, 'concepts', conceptId, 'notifications'),
		where("concept_id", "==", conceptId)
	);
	const notificationSnapshot = await getDocs(q);
	notificationSnapshot.docs.forEach(async (document) => {
		await deleteDoc(doc(db, 'concepts', conceptId, 'notifications', document.id));
	})
	await deleteDoc(doc(db, 'concepts', conceptId));
}

async function main() {

	// create a user
	const userId = await createUser({
		"username": "johnsmithy",
		"first_name": "John",
		"last_name": "Smith",
		"email": "johnsmith@example.com"
	});

	// create a concept 
	const concept = {
		"concept_name": "OS Fundamentals",
		"notes": "The OS allows for multiple processes to be running concurrently",
		"content": "Chapter 1: Virtualization",
	};
	const reviewTimes = [1, 3, 7, 14];
	const conceptId = await createConcept(userId, concept, reviewTimes);
	
	// delete a concept
	await deleteConcept(conceptId);
}

main();