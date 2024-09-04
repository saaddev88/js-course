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

// *************************MEMORY-TYPE*********************************
// THERE ARE TEO TYPES OF MEMORY
// 1)STACK(PRIMITIVE DATATYPES) 2)HEAP(NON-PRIMITIVE DATATYPES)

//EXAMPLE FOR STACK

let number =3456;
let anothernumber = number;
anothernumber =6789;
// console.log(anothernumber);
// console.log(number);in stack the actual value is remain same not change because it give the copy to the new variable if the variable the change the value didnt effect the actual value 

// EXAMPLE FOR HEAP
let person1 ={
    name:"aslam",
    age:43,
    email:"jdksnn@google,com"

}
let person2 = person1;
person2.name ="saad"
person2.age =22
person2.email="saad@google,com"

console.log(person2);//in heap the actual value is changable because in heap it uses the reference of the past array,function,object thatswhy old memory is remove over new





