//*******************DATA TYPES*******************
// 1)PRIMITIVE DATATYPES:
// There are 7 different datatype in primitive datatype
// 1 String 
// 2 Number
// 3 Boolean
// 4 BigInt
// 5 Null
// 6 Undefined
// 7 Symbol
 
const score = 34442
const name="saad"
let area;
const isloggedin = true
const outsidetemp = null
let state= undefined

let password = Symbol(4524)
let anotherpassword=  Symbol(4524)
// console.log(password === anotherpassword); outout is false because we use symbol that's why the answer is false both password is unique 


// 2)NON-PRIMITIVE DATATYPE:
// array,object,function

let states =["sindh","punjab","kpk","gb","ajk"] //its is array and its type is object


const myfunction = function(){
    console.log("hello world");//function types is object function
    
}
// following are the object and its type is object
let myobj ={ 
    name : "saad",
    age : 18
}
console.log(typeof states);

// https://262.ecma-international.org/5.1/#sec-11.4.3
