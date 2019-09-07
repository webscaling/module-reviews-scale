# Shazamazon Reviews

Built using React, the Shazamazon reviews component is one part of a larger Amazon clone. The component is able to render an average rating, as well as list reviews and and associated data based on a single item ID. In addition to the text and rating for reviews, data like photo submission and helpful count is also available. 



## Stack

This component is built with the following technologies:

- React to build out the front end
- Express for the server, and body-parser to parse routes
- MongoDB for the database, Mongoose to interface with the DB
- Censor-Sensor as a profanity filter



## Getting Started
1. Install NPM packages:
```
npm install
```
2. Start MongoDB (skip this is you already have MongoDB running)
```
npm run database
```
3. Start the server (default port is 3333)
```
npm run server
```
4. Connect to the client
```
npm start
```
5. Navigate to localhost:3333

In it's current state, the endpoints are set up to an EC2 instance. If it is no longer live, you can adjust the endpoints in src/index.jsx and ComposeReview.jsx to work with localhost so long as you have MongoDB installed locally. 

You will also have to configure a config.js file to connect to an Atlas server if you wish to do so, else you can re-route the db link in db/index.js to a local mongo server. You may wish to seed the database using db/seed.js.

If you would like, you can skip step four and run live-server if it is installed in your machine in order to track changes live. To do this, make sure you have live-server installed globally on your machine (npm install live-server -g) and then run the following script.
```
npm run live-server
```



## User stories

Here are the user stories explored to create this app:

- [X] As a user, I should be able to see aggregate ratings for the item I am exploring.
- [X] As a user, I should be ble to read reviews relevant to the item I am exploring.
- [X] As a user, I should be able to write a review, and have the surrounding components update accordingly.
- [X] As a user, I should be able to mark reviews as helpful and remove these votes.
- [X] As a user dependent on screen dictation, I should be able to navigate this app. 

##Dependencies

"axios": "^0.19.0",
"body-parser": "^1.19.0",
"censor-sensor": "^1.0.4",
"eslint": "^6.2.1",
"express": "^4.17.1",
"mongoose": "^5.6.10",
"neah": "^1.0.2",
"react": "^16.9.0",
"react-dom": "^16.9.0"

Developer:

"@babel/core": "^7.5.5",
"@babel/preset-env": "^7.5.5",
"@babel/preset-react": "^7.0.0",
"babel-loader": "^8.0.6",
"webpack": "^4.39.2",
"webpack-cli": "^3.3.7",
"webpack-dev-server": "^3.8.0"