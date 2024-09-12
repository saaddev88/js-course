const myArr1 = [1,2,3,4,5,6]
const myArr2 = [4,5,6,7,8,9]
// myArr1.push(myArr2)
// console.log(myArr1);
// console.log(myArr1[6][3]);
// const newarray = myArr1.concat(myArr2)
// console.log(newarray);

// const allofus =[...myArr1,...myArr2] //new techinuq of using array.
// console.log(allofus);

const anotherArray = [1,2,3,[2,3,4],3,4,5,[4,5,6,7],4,5,6,7,[3,8,2,5]]
const realanotherArray = anotherArray.flat(Infinity)
console.log(realanotherArray);

console.log(Array.isArray("saad"));
console.log(Array.from("saad"));
console.log(Array.from({name: "saad"}));//intersting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));




