const Item = require('./index.js');
const Neah = require('neah'); //Arnie quote generator
const neah = new Neah();
const { CensorSensor } = require('censor-sensor'); //Profanity filter
const censor = new CensorSensor();
const dummyData = require('./dummydata');

censor.disableTier(4);

const arniePics = [
  'https://review-pics.s3.amazonaws.com/arnie+pics/arnie1.jpg',
  'https://review-pics.s3.amazonaws.com/arnie+pics/arnie2.jpg',
  'https://review-pics.s3.amazonaws.com/arnie+pics/arnie3.png',
  'https://review-pics.s3.amazonaws.com/arnie+pics/arnie4.jpg',
  'https://review-pics.s3.amazonaws.com/arnie+pics/arnie5.png',
  'https://review-pics.s3.amazonaws.com/arnie+pics/arnie6.jpg',
  'https://review-pics.s3.amazonaws.com/arnie+pics/arnie7.jpg',
];

const seedFakeData = (itemCount) => {
  for(var i = 0; i < itemCount; i++){
    let rating = Math.floor((Math.random() * 5) + 1);
    let itemID = Math.floor((Math.random() * 100) + 1);

    let ipsum = censor.cleanProfanityIsh(neah.paragraph());
    let title = censor.cleanProfanityIsh(neah.getRandom());
    title = title.length > 50 ? title.substring(0,50) + '...' : title;

    let helpful = Math.floor((Math.random() * 15) + 1);

    let randYear = Math.floor((Math.random() * 3) + 2017);
    let monthMax = randYear === 2019 ? 7 : 11;
    let randMonth = Math.floor((Math.random() * monthMax) + 1);
    let randDay = Math.floor((Math.random() * 27) + 1);
    let randHours = Math.floor((Math.random() * 24) + 0);
    let randMins = Math.floor((Math.random() * 60) + 0);
    let randDate = new Date(Date.UTC(randYear, randMonth, randDay, randHours, randMins));

    var singleItem = new Item({
        itemID: itemID,
        author: 'testAuth',
        avatarURL: arniePics[i % arniePics.length],
        rating: rating,
        title: title,
        text: ipsum,
        date: randDate,
        helpfulCount: helpful
    });
    singleItem.save(async (err, item) => {
        if(err) console.error(err);
        await console.log(`item id ${item.itemID} was seeded to the database`)        
    })
  }
}

const createRandomItem = (review_ID, itemID, biasRating) => {

  let rating;
  if(biasRating === undefined) {
    rating = Math.floor((Math.random() * 5) + 1);
  } else {
    rating = biasRating;
  }
  //let itemID = Math.floor((Math.random() * 100) + 1);

  let ipsum = censor.cleanProfanityIsh(neah.paragraph());
  let title = censor.cleanProfanityIsh(neah.getRandom());
  title = title.length > 50 ? title.substring(0,50) + '...' : title;

  let helpful = Math.floor((Math.random() * 15) + 1);

  let randYear = Math.floor((Math.random() * 3) + 2017);
  let randMonth = Math.floor((Math.random() * 11) + 1);
  let randDay = Math.floor((Math.random() * 27) + 1);
  let randHours = Math.floor((Math.random() * 24) + 0);
  let randMins = Math.floor((Math.random() * 60) + 0);
  let randDate = new Date(Date.UTC(randYear, randMonth, randDay, randHours, randMins));

  var singleItem = new Item({
      reviewID: review_ID,
      itemID: itemID,
      author: 'testAuth',
      avatarURL: arniePics[review_ID % arniePics.length],
      rating: rating,
      title: title,
      text: ipsum,
      date: randDate,
      helpfulCount: helpful
  });

  return singleItem;

}

module.exports = { seedFakeData };