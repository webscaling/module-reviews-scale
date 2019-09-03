const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3333;
const Item = require('../db/index.js');
const { seedFakeData } = require('../db/seed.js');
const { CensorSensor } = require('censor-sensor');
const censor = new CensorSensor();
const mongoose = require('mongoose');

censor.disableTier(4);
const bannedWords = [
  'avada',
  'kedavra',
  'imperio',
  'crucio',
  'voldemort'
]
bannedWords.forEach((word) => {
  censor.addWord(word);
})

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

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

app.post('/publishReview', (req, res)=> {
  let reviewObj = req.body;
  let account = 'Guest'
  let newReview = new Item({
    itemID: reviewObj.itemID,
    author: censor.cleanProfanityIsh(account),
    avatarURL: 'https://media.tenor.com/images/e71dec17746af9d0e3555fbbb9c580f0/raw',
    rating: reviewObj.rating,
    title: censor.cleanProfanityIsh(reviewObj.title),
    text: censor.cleanProfanityIsh(reviewObj.review),
    date: new Date(),
    helpfulCount: 0
  });
  newReview.save(async (err, item) => {
    if(err) console.error(err);
    await console.log(`New review successfully posted from ${newReview.author}`);
    await res.send('post successful');
  });
});

app.patch('/updateHelpful', (req, res)=> {
  let newReviewObj = req.body.reviewObj;
  newReviewObj.helpfulCount++;
  Item.updateOne({ _id: `${newReviewObj._id}` }, 
                        { $set: { helpfulCount: newReviewObj.helpfulCount } }, 
                        (err, result) => {
                          if(err) console.log(err)
                          console.log(`review ${newReviewObj._id} marked as helpful`)
                          res.send()
                        })
})


app.listen(port, () => console.log(`You get a 5-star rating on port ${port}`))