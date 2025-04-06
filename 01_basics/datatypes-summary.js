// primitive datatypes
// 7 types: string,number,null,undefined,symbol,bigint,boolean

const score = 100
const scorevalue = 100.3

const isloggedin = false
const outsidetemp = null
let useremail;
const id = Symbol("123")
const anotherid = Symbol("123")

const bigint = 1256484864568897n



// non-primitive datatypes(refrencestypes)

// array,objects,functioms

const heros =["batman","spiderman","safeguard"]
let myobj ={

    name :"saad",
    age :23,
    gender:"male"}
const myfunction = function(){

    console.log("helloworld");

}
console.log(typeof bigint);
console.log(typeof myfunction);
console.log(typeof  useremail);
console.log(typeof heros);
// ****************************************************************

// there are two types of memory is presented
// stack(primitive) and heap (non primitive)

// In stack the copy of your data is used not the original one 

//  In heap memory the original reference is given thats why if you want to change the reference the original one is also changed

// for example:

// for stack:

let userone = "android"
let usertwo = userone
usertwo = "iphone"


console.log(userone);

console.log(usertwo);

// for heap 

let studentdetail = {
    name : "saad",
    id: 140,
    email: "saad.com"
}

let maindata = studentdetail

maindata.id = 149
console.log(studentdetail.id);

console.log(maindata.id);






