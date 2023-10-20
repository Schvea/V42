//Data one
const baseOne = 10;
const heightOne = 13;

const triangleOne = (baseOne * heightOne) / 2;

//console.log(triangleOne);


const baseTwo = 16.5;
const heightTwo = 20.3;

const triangleTwo = (baseTwo * heightTwo) / 2;
//console.log(triangleTwo);

console.log(Math.max(triangleOne, triangleTwo));

//Data two

const baseThree = 20.3;
const heightThree = 16.5;

const triangleThree = (baseThree * heightThree) / 2;

console.log(triangleThree == triangleTwo);

//triangleFive: base = 7,8cm, height = 5,6cm

//triangleSix: base = 9,3cm, height = 12,4cm

const baseFour = 7.8;
const heightfour = 5.6;

const triangleFour = (baseFour * heightfour) / 2;
//console.log(triangleFour);

const baseFive = 9.3;
const heightFive = 12.4;

const triangleFive = (baseFive * heightFive) / 2;

//console.log(triangleFive);

console.log(Math.max(triangleFive, triangleFour));

console.log(Math.max(triangleFive, triangleFour, triangleThree, triangleTwo, triangleOne));

