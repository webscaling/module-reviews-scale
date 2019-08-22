# Shazamazon Reviews

Built using React, the Shazamazon reviews component is one part of a larger Amazon clone. The component is able to render an average rating, as well as list reviews and and associated data based on a single item ID. In addition to the text and rating for reviews, data like photo submission and helpful count is also available. 

## Stack

This component is built with the following technologies:
-React to build out the front end
-Express for the server, and body-parser to parse routes
-MongoDB for the database, Mongoose to interface with the DB

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

If you would like, you can skip step four and run live-server if it is installed in your machine in order to track changes live. To do this, make sure you have live-server installed globally on your machine (npm install live-server -g) and then run the following script.
```
npm run live-server
```

## User stories

Here are the user stories explored to create this app:
-[ ]As a user, I should be able to see aggregate ratings for the item I am exploring.
-[ ]As a user, I should be ble to read reviews relevant to the item I am exploring.
  -[ ]As a user, I should be able to view images attached to these reviews.
-[ ]As a user, I should be able to write a review, and have the surrounding components update accordingly.
  -[ ]As a user, I should also be able to submit photos to this review.
-[ ]As a user, I should be able to mark reviews as helpful.

