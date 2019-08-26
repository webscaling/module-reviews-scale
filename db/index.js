const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shazamazon-reviews', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('SHAZAM! You\'re connected to the db');
});

const itemSchema = new mongoose.Schema({
  reviewID: Number,
  itemID: Number,
  author: String,
  avatarURL: String,
  rating: Number,
  title: String,
  text: String,
  helpfulCount: Number
});

var Item = mongoose.model('reviews', itemSchema);

module.exports = Item;