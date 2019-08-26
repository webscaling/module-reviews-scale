const Item = require('./index.js');
const Neah = require('neah'); //Arnie quote generator
const neah = new Neah();
const { CensorSensor } = require('censor-sensor'); //Profanity filter
const censor = new CensorSensor();

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
    let rating = Math.floor((Math.random() * 5) + 1)
    let itemID = Math.floor((Math.random() * 100) + 1)
    let ipsum = censor.cleanProfanityIsh(neah.paragraph());
    let title = censor.cleanProfanityIsh(neah.getRandom());
    title = title.length > 50 ? title.substring(0,50) + '...' : title;
    let helpful = Math.floor((Math.random() * 32) + 1)
    var singleItem = new Item({
        reviewID: i,
        itemID: itemID,
        author: 'testAuth',
        avatarURL: arniePics[i % arniePics.length],
        rating: rating,
        title: title,
        text: ipsum,
        helpfulCount: helpful
        
    });
    singleItem.save(async (err, item) => {
        if(err) console.error(err);
        await console.log(`item id ${item.itemID} was seeded to the database`)        
    })
  }
}


module.exports = seedFakeData;