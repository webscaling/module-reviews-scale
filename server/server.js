const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3333;
const Item = require('../db/index.js')

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
  for(var i = 0; i < 1000; i++){
      let rating = Math.floor((Math.random() * 5) + 1)
      let itemID = Math.floor((Math.random() * 100) + 1)
      let hipsum = 'Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. ' + 
                  'Mudbloods yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. ' + 
                  'Ministry-of-Magic mimubulus mimbletonia Pigwidgeon knut phoenix feather other minister Azkaban. ' +
                  'Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed. Fawkes maze raw-steak ' +
                  'Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.'
      let helpful = Math.floor((Math.random() * 32) + 1)
      var singleItem = new Item({
          reviewID: i,
          itemID: itemID,
          author: 'testAuth',
          rating: rating,
          title: 'SHAZAM KABLAM ALAKAZAM',
          text: hipsum,
          helpfulCount: helpful
          
      });
      singleItem.save(async (err, item) => {
          if(err) console.error(err);
          await console.log(`item id ${item.itemID} was seeded to the database`)        
      })
    }
    res.send('database seed attempted')
})

app.get('/get-reviews', (req, res) => {
  Item.find({rating: 4}, (err, items) => {
    res.send(JSON.stringify(items[0], null, '\t'))
  })

})


app.listen(port, () => console.log(`You get a 5-star rating on port ${port}`))