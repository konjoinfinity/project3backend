# Petz

### Description

A social media app for pets, find your favorite pets, comment, lick, and create a profile for your pet!

### Delegate Tasks

All team members would like to work on the front and back end. In order to accomplish that, the project tasks will be delegated based on features. Team members will be responsible for making sure a certain feature works on both the front and back end. In order to get a core app with basic functionality, we did split tasks up on frontend/backend: Konjo made some initial React frontend pages, Cathy handled the Pets API, and Annabelle took care of the Comments API.

### Git Work Flow

Most of our work will be in the development branch. Feature branches will be created from the development branch. We’ll only merge to master when we deploy.

### Models

1. Pet (aka the Pet profile which will have FULL CRUD)

- Name
- Description
- Species (preselected category - start with cats and dogs)
- Profile_picture (Owner can have many pets would be Gold Standard)
- Social_link (optional Social links for Twitter and Instagram)
- Licks (Likes for profile, not comments)
- [Comments]

2. Comment

- Message

3. User

- Email
- password
- name
- pets - (references the pet schema) (Gold plan)

## Planning

#### Day 1:

- Set goals for Day 1
- Wireframing
- Create repos for GitHub and clone down
- Set up directory/file structure
- Plan/install dependencies
- Initiate backend with Node, server with Express
- Create super basic React frontend
- Create seed file/DB and read it on backend

#### Day 2:

- Set goals for Day 2
- Create basic views for all the routes required (frontend)
- Edit seed file for Pets and Comments
- Work on CRUD Pet profile backend
- Work on CRUD comment backend
- Connect frontend and backend (render Hello World)
- Deployment to Heroku (backend) and Surge (frontend)
- Work on licks to pet profile on the frontend

#### Day 3:

- Set goals for Day 3
- Work on licks to pet profile on the backend
- Add Search feature
- Work on homepage - The Daily Fire Hydrant
- Work on comments on the backend
- User authentication

#### Day 4:

- Set goals for Day 4
- Update seed file
- Delete comment method (Bug still exists - backend gets confused when we are making multiple requests)
- Fix delete pet method
- Updated API request to read on both heroku or local host
- Comments render after a refresh (unresolved)
- Style the pet show page - The Licking Post
- Mobile responsive
- Refactor Pet component into smaller pieces
- Decide on a project name (did not have time to do)
- Make a new logo (did not have time to do)

#### Day 5:

- Deploy app
- Test if components and methods work on live link
- We have a bug when making multiple requests
- ReadMe and planning.md documentation. Add a user story
- Add more styling/refactor if time
- Deploy app
- Prep for presentation
