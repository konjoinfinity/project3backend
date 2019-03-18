# Models

1. Pet (This is the Pet Profile which wil have FULL CRUD)

- Name
- Description
- Species (preselected category - start with cats and dogs)
- Owner (Owner can have many pets would be Gold Standard)
- Url (optional Social links for twitter and instagram)
- [Number of likes] (Likes for profile, not comments)(Silver standard would be to conditional rendering the likes as Meows or Woofs)
- [Comments]

2. Comment

- Message
- [Number of likes] (Gold standard)
- Author (Gold standard)

3. User

- Username
- password

# Steps

- Npm init -y
- Install dependencies - Express, mongoose, body-parser, cors, nodemon
- Install dependencies for authentication - passport, jwt-simple, passport-jwt
- Create file system (Profile, Comment, and User model)
- Require dependencies in index.js
- In Index.js connect the routes directory and listen to port 3001
- Create user model and pet model
