# To start the project
`npm run start`

# Project structure walkthrough
The project is divided into a standard MVC project for readability and maintability
1. Begins by setting up an express server in app.js and deputing routes file over highlevel routes which is exported.
2. server.js imports the mentioned app server and listens to a port specified in the .env file with PORT and connects to a mongodb with the URI defined in .env as MONGODB_URI
3. Each of the low level routes is defined and allotted actions in the routes files. the actions are imported from controllers.
4. The controller imports models and performs CRUD operations on it.
5. Models define schema and create a document in the mongodb using mongoose.