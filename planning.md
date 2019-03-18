# Models

1. Profile (FULL CRUD)

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
  3

# Steps

- Npm init -y
- Install dependencies - Express, mongoose, body-parser, cors, nodemon
- Install dependencies for authentication - passport, jwt-simple, passport-jwt
- Create file system
