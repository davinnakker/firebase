# Overview

As a software engineer I will be interacting all the time with different database technologies. There are many different types of databases
that are used in the industry. One of the most prominent is a document database. A document database allow you to store document that have key value
pairs similar to JSON as one document. It is schema-less and allows you be flexible with your schema rather than having to define it before as with
a relation DB. 

This software interacts with Google's BaaS product Firebase. Though Firebase has many features, one of them is called Firestore which is a managed document database.
It exposes an SDK client library which I use in this repo to perform CRUD operations.

My purpose in creating this software is to use Firestore as a place to store data for an application I am creating. This application is made to help students and 
learners put into practice spaced repetition. It allows users to create an account and then create concepts that they have learned. They submit notes and sources 
from a concept and then my app will set up notifications throughout the following days to remind them to review the concept. In order to store those concepts and the 
notification times, I decided to use Google's Firestore to save that data. It allowed me to create a subcollection of notifications within each concept that the 
user creates.

{Provide a link to your YouTube demonstration. It should be a 4-5 minute demo of the software running, a walkthrough of the code, and a view of the cloud database.}

[Software Demo Video](https://youtu.be/Dme57JaObX4)

# Cloud Database

The Cloud Database I am using is a Document Database provide by Google called Firestore. 

### My Data Model:
- users/{user_id}
    - username
    - first_name
    - last_name
    - email
    - created_at

- concepts/{concept_id}
    - user_id
    - concept_name
    - notes
    - content
    - created_at
    - notifications/{notification_id}
        - reminder_time
        - past_due
        - reviewed

# Development Environment

* **Runtime / Language:** Node.js v24
* **Package Manager:** npm
* **Database / Services:** Firebase

# Useful Websites

- [Firebase Official Documentation](https://firebase.google.com/docs/firestore?_gl=1*yfojp3*_up*MQ..&gclid=Cj0KCQjwz4LWBhCMARIsAFEG5MpvLYqqlOvC_J25sXqi-hSOYR-2usgi_uMdQN8FJlFToynphmn5M9MaApcNEALw_wcB&gbraid=0AAAAADpUDOigov5QCeAP6eS5ZB8xZWyCm)

# Future Work

- Write application specific query functions
- Add more security and IAM rules
- Make all function atomic and provide rollback if there is a failure
