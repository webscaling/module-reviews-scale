const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3333;
const Item = require('../db/index.js');
const { seedFakeData, seedFakeDataToMatch } = require('../db/seed.js');

app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.all('/seed', (req, res) => {
  seedFakeData(1000);
  res.send('database seed attempted');
});

app.get('/get-reviews', (req, res) => {
  Item.find({rating: 4}, (err, items) => {
    res.send(JSON.stringify(items[0], null, '\t'));
  });

});

app.get('/itemReviews', (req, res) => {
  let queriedItemID = req.query.itemID;
  Item.find({itemID: queriedItemID}, (err, reviews) => {
    res.send(reviews);
  });
});


app.listen(port, () => console.log(`You get a 5-star rating on port ${port}`))