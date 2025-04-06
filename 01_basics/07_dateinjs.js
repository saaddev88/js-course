// Date in js


let myDate = new Date()
console.log(myDate.toLocaleString());

console.log( typeof myDate);


let myCreatedDate = new Date(3,4,25,5,6)
// console.log(myCreatedDate.toLocaleString());

let mytimestamp = Date.now()
console.log(mytimestamp);

console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate.toLocaleString());
console.log(newdate.getMonth() + 1);
console.log(newdate.getDay() + 1);


 
