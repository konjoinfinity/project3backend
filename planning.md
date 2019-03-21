# Petz

### Description

A social media app for pets, find your favorite pets, comment, lick, and create a profile for your pet!

### Delegate Tasks

All team members would like to work on the front and back end. In order to accomplish that, the project tasks will be delegated base on features. Team members will be responsible for making sure a certain feature works on both the front and back end.

### Git Work Flow

Most of our work will be in the development branch. Feature branches will be created from the development branch. We’ll only merge to master when we deploy.

### Models

1. Pet (aka the Pet profile which will have FULL CRUD)

- Name
- Description
- Species (preselected category - start with cats and dogs)
- Profile_picture (Owner can have many pets would be Gold Standard)
- Social_link (optional Social links for twitter and instagram)
- Licks (Likes for profile, not comments)
- [Comments]

2. Comment

- Message

3. User

- Username
- password
- name
- pets - (references the pet schema) (Gold plan)

## Planning

#### Day 1:

- Set goals for Day 1
- Wireframing
- Create repos for Github and clone down
- Setup directory/file structure
- Plan/install dependencies
- Initiate backend with node, server with express
- Create super basic React frontend
- Create seed file/DB and read it on backend

#### Day 2:

- Set goals for Day 2
- Create basic views for all the routes required (front end)
- Edit seed file for Pets and Comments
- Work on CRUD Pet profile backend
- Work on CRUD comment backend
- Connect frontend and backend (render Hello World)
- Deployment to Heroku (backend) and Surge (frontend)
- Work on licks to pet profile on the front end

#### Day 3:

- Set goals for Day 3
- Work on licks to pet profile on the backend
- Add Search feature
- Work on homepage - the daily fire hydrant
- Work on comments on the backend
- User authentication

#### Day 4:

- Set goals for Day 4
- Update seed file
- Delete comment method (BUG still exists - backend gets confused when we are making multiple requests)
- Fix delete pet method
- Updated API request to read on both heroku or local host
- Comments render after a refresh (unresolved)
- Style the pet show page - the licking post
- Mobile responsive
- Refactor pets component to
- Decide on a project name (did not have time to do)
- Make a new logo (did not have time to do)

#### Day 5:

- Deploy app
- Test if components and methods work on live link
- We have a bug when making multiple requests
- Readme and planning.md documentation. Add a user story
- Add more styling/refactor if time
- Deploy app
- Prep for presentation
