const faker
const fs

let stream = fs.createWriteStream('reviews.txt', {flags:'a'});

for(let i = 0; i < 1000000;i++) {
    let entryID = i;
    let numOfRevs = Math.ceil(Math.random() * 13);
    for(let j = 0; j < numOfRevs; j++) {
      let review = faker.fake();
      let author = faker.fake('{{internet.userName}}');
    }
    stream.write(`${entryID}|${review}|${author}\n`);
}