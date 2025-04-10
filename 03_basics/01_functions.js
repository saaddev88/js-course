// function in js

function saymyName(){
console.log("saad");
}
saymyName()

function addnumber(number1,number2){

    let result
    result = number1 + number2
    return result
    
}
const result = addnumber(5,7) 
console.log(result);

// function loginmessage(username){
//     if(username === undefined){
//         console.log("please enter the username")
//         return 
//     }



//     return `${username} just login`
// }
// const message = loginmessage() 
// console.log(message);

// function loginmessage(username){
//     if(!username){
//         console.log("please enter the username")
//         return 
//     }



//     return `${username} just login`
// }
// const message = loginmessage() 
// console.log(message);
function loginmessage(username = "sam"){
    if(!username){
        console.log("please enter the username")
        return 
    }



    return `${username} just login`
}
const message = loginmessage("saad") 
console.log(message);


// function calculatecartprice(num){
//     return num

// }

// console.log(calculatecartprice(30,40,50,70,55)); // in these argument the first value is print and after that all values not print

// for these type of case we use rest operator :
// function calculatecartprice(...num){
//     return num

// }

// console.log(calculatecartprice(30,40,50,70,55))


//another scanario is:

function calculatecartprice(val1,val2,...num){
    return num

}

console.log(calculatecartprice(30,40,50,70,55))

//how to handle object in function:

const user ={
    name:"saad",
    fname:"munawar",
    age:23
}
function objecthandle(anyobject) {
    return console.log(`student name ${anyobject.name} and father name is ${anyobject.fname} and age is ${anyobject.age}`);
}
// objecthandle(user)
objecthandle({name:"saad",fname:"munawar",age:23})

// how to handle arrays in function
 const myArray = [23,66,77,88,56]

 function extarctnumbers(anyarray){
    return console.log(`the exact number is ${anyarray[4]}`);
 }
 const answer = extarctnumbers(myArray)