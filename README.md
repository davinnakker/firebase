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

[Software Demo Video](http://youtube.link.goes.here)

# Cloud Database

The Cloud Database that I am using is a Document Database provide by Google called Firestore. 

My Data Model:
users/{user_id}
    username
    first_name
    last_name
    email
    created_at

concepts/{concept_id}
    user_id
    concept_name
    notes
    content
    created_at
    notifications/{notification_id}
        reminder_time
        past_due
        reviewed

# Development Environment

* **Runtime / Language:** Node.js v24
* **Package Manager:** npm
* **Database / Services:** Firebase

{Describe the tools that you used to develop the software}

{Describe the programming language that you used and any libraries.}

# Useful Websites

{Make a list of websites that you found helpful in this project}

- [Web Site Name](http://url.link.goes.here)
- [Web Site Name](http://url.link.goes.here)

# Future Work

{Make a list of things that you need to fix, improve, and add in the future.}

- Item 1
- Item 2
- Item 3
