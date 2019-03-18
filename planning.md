# Facebark

# Description

A social media app for pets, find your favorite pets, comment, lick, and create a profile for your pet! The facebark.

# Delegate Tasks

All team members would like to work both on the front and back end. In order to accomplish that, the project tasks will be delegated base on features.

# Git Work Flow

Most of our work will be in the development branch. Feature branches will be created from the development branch. We’ll only merge to master when we deploy.

# Models

1. Pet (This is the Pet Profile which wil have FULL CRUD)

- Name
- Description
- Species (preselected category - start with cats and dogs)
- Profile_picture (Owner can have many pets would be Gold Standard)
- Social_link (optional Social links for twitter and instagram)
- Licks (Likes for profile, not comments)(Silver standard would be to conditional rendering the likes as Meows or Woofs)
- [Comments]

2. Comment

- Message

3. User

- Username
- password
- name
- pets - (references the pet schema)
