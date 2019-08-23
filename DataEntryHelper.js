
//NOTE: Change 'lamps' to your category
const categoryFolder = 'lamps';
// const printArr  = (folder, num) => {
//   let result = [];
//   for(let i = 0; i < num; i++){
//     let pushString = `https://shazamazon.s3.us-east-2.amazonaws.com/${categoryFolder}/${folder}/view${i}.jpg`
//     result.push(pushString)
//   }
//   return result;

// }

const printArr = (lampStyle, num) => {
  let result = [];
  for (let i = 0; i < num; i++) {
    let pushString = `https://shazamazon.s3.us-east-2.amazonaws.com/${categoryFolder}/${lampStyle}${i}.jpg`;
    result.push(pushString);
  }
  return result;

};

// console.log(printArr('Genie+Lamp+1', 6))
// console.log(printArr('Genie+Lamp+2', 9))
// console.log(printArr('RainbowLamp', 6))
// console.log(printArr('HoopLamp', 9))

// console.log(printArr('DiscoLamp', 9))
// console.log(printArr('CatLamp', 7))

// console.log(printArr('NeonAladdin', 9))
// console.log(printArr('NeonCatLamp', 7))

console.log(printArr('DisneyLamp', 6));
console.log(printArr('ElectricLamp', 7));
console.log(printArr('GasLamp', 3));
console.log(printArr('LampFuel', 1));
console.log(printArr('LavaLamp', 2));
console.log(printArr('MushroomLamp', 7));