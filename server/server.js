const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3333;
const Item = require('../db/index.js');
const seed = require('../db/seed.js');

app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.all('/test', (req, res) => {
  let rating = Math.floor((Math.random() * 5) + 1)
  let hipsum = `this text is from the server`
  let helpful = Math.floor((Math.random() * 32) + 1)
  var singleItem = new Item({
      reviewID: 7777,
      author: 'testAuth',
      rating: rating,
      title: 'ABRA KADABRA ALAKAZAM',
      text: hipsum,
      helpfulCount: helpful
  });

  singleItem.save(async (err, item) => {
    if(err) console.log(err);
    await res.send(`item ${item.title} was seeded to the database`)
  })

})


app.all('/seed', (req, res) => {
  //Seed
  seed(1500);
  res.send('database seed attempted');
})

app.get('/get-reviews', (req, res) => {
  Item.find({rating: 4}, (err, items) => {
    res.send(JSON.stringify(items[0], null, '\t'))
  })

})

app.get('/itemReviews', (req, res) => {
  let queriedItemID = req.query.itemID;
  Item.find({itemID: queriedItemID}, (err, reviews) => {
    res.send(reviews)
  })
})


app.listen(port, () => console.log(`You get a 5-star rating on port ${port}`))