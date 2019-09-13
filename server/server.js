const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3333;
const Item = require('../db/index.js');
const { seedFakeData } = require('../db/seed.js');
const { CensorSensor } = require('censor-sensor');
// const censor = new CensorSensor();
const mongoose = require('mongoose');

// censor.disableTier(4);
// // const bannedWords = [
//   'avada',
//   'kedavra',
//   'imperio',
//   'crucio',
//   'voldemort'
// ]
// bannedWords.forEach((word) => {
//   censor.addWord(word);
// })

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
  seedFakeData(500000);
  res.send('database seed attempted');
});

app.get('/get-reviews', (req, res) => {
  Item.find({rating: 4}, (err, items) => {
    res.send(JSON.stringify(items[0], null, '\t'));
  });

});

app.get('/itemReviews', (req, res) => {
  let queriedItemID = req.query.itemID;
  let queryUser = req.query.user;
  Item.find({itemID: queriedItemID}, (err, reviews) => {
    //Sanitizing response to remove data from other users
    reviews.forEach(review => {
      if(review.foundHelpful.includes(queryUser)){
        review.foundHelpful = [queryUser]
      } else {
        review.foundHelpful = [];
      }
    })
    res.send(reviews);
  });
});

app.post('/publishReview', (req, res)=> {
  let reviewObj = req.body;
  let newReview = new Item({
    itemID: reviewObj.itemID,
    author: reviewObj.author,
    avatarURL: 'https://media.tenor.com/images/e71dec17746af9d0e3555fbbb9c580f0/raw',
    rating: reviewObj.rating,
    title: reviewObj.title,
    text: reviewObj.review,
    date: new Date(),
    helpfulCount: 0
  });
  newReview.save(async (err, item) => {
    if(err) console.error(err);
    await console.log(`New review successfully posted from ${newReview.author}`);
    await res.send('post successful');
  });
});

app.patch('/updateHelpful', async (req, res)=> {
  let user = req.body.user;
  let newReviewObj = req.body.reviewObj;
  let helpfulArray = [];
  await Item.findOne({ _id: `${newReviewObj._id}` }, (err, result) => {
    if (err) console.log(err);

    helpfulArray = result.foundHelpful;
    helpfulSet = new Set(helpfulArray);
    helpfulArray = Array.from(helpfulSet);

    if(helpfulArray.includes(user)) {
      newReviewObj.helpfulCount--;
      helpfulArray.splice(helpfulArray.indexOf(user), 1);
    } else {
      newReviewObj.helpfulCount++;
      helpfulArray.push(user);
    }
    console.log(helpfulArray)
  })
  await Item.updateOne({ _id: `${newReviewObj._id}` }, 
                        { $set: { 
                          helpfulCount: newReviewObj.helpfulCount,
                          foundHelpful: helpfulArray
                        } }, 
                        (err, result) => {
                          if(err) console.log(err);

                          console.log(`review ${newReviewObj._id} updated`)
                          res.send()
                        })
})


app.listen(port, () => console.log(`You get a 5-star rating on port ${port}`))