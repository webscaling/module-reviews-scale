const Item = require('./index.js')

const seedFakeData = (itemCount) => {
  for(var i = 0; i < itemCount; i++){
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
        avatarURL: 'https://i.imgflip.com/29s5ao.jpg',
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
}

module.exports = seedFakeData;