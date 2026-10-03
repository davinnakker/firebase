### Notes:

Seems like the most important things to remember  are the different
functions that have getDoc or addDoc etc.

## Doc Functions
getDoc
getDocs
addDoc
updateDoc
deleteDoc

## Reference Functions
doc
collection

## Query Functions
query (main one)
where
orderBy
limit



# Data Model

users/{user_id}
    - username
    - first_name
    - last_name
    - email
    - created_at

concepts/{concept_id}
    - user_id
    - concept_name
    - notes
    - content
    - created_at
    - notifications/{notification_id}
        -- reminder_time
        -- past_due
        -- reviewed

