const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/shazamazon-reviews', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('SHAZAM! You\'re connected to the db')
});

const itemSchema = new mongoose.Schema({
    reviewID: Number,
    author: String,
    rating: Number,
    title: String,
    text: String,
    helpfulCount: Number
});

var Item = mongoose.model('reviews', itemSchema)

//Seed
// for(var i = 0; i < 100; i++){
//     let rating = Math.floor((Math.random() * 5) + 1)
//     let hipsum = `Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. 
//                 Mudbloods yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. 
//                 Ministry-of-Magic mimubulus mimbletonia Pigwidgeon knut phoenix feather other minister Azkaban. 
//                 Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed. Fawkes maze raw-steak 
//                 Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.`
//     let helpful = Math.floor((Math.random() * 32) + 1)
//     var singleItem = new Item({
//         reviewID: i,
//         author: 'testAuth',
//         rating: rating,
//         title: 'SHAZAM KABLAM ALAKAZAM',
//         text: hipsum,
//         helpfulCount: helpful
        
//     });
//     singleItem.save(async (err, item) => {
//         if(err) console.error(err);
//         await console.log(`item id ${item} was seeded to the database`)
//     })
// }

