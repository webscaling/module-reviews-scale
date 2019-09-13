const mongoose = require('mongoose');
// const atlasKey = require('./config.js');
const URI = `mongodb://localhost/modules-review?retryWrites=true&w=majority`

mongoose.connect(URI, {useNewUrlParser: true});

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
  date: Date,
  helpfulCount: Number,
  foundHelpful: Array
});

const ItemModel = mongoose.model('reviews', itemSchema);

module.exports = { ItemModel };