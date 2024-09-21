// ******************************FUNCTIONS***********************************

// console.log("s");
// console.log("a");
// console.log("a");
// console.log("d");


// () this is paranthesis in which parameters are pass 
// e.g sayMyname is my function and if the user enter the value then sayMyname(saad) is called arguments

// function sayMyname() {
//     console.log("s");
// console.log("a");
// console.log("a");
// console.log("d");
    
// }
// sayMyname() in this way the functions is executable 

// function addtwonums(num1 ,num2) {
//     console.log(num1 + num2 );

    

// }
// addtwonums(5,6)
// if we want to return the value of the result in variable out side of the function then we use return 
function addtwonums(num1 ,num2) {

    // let result = num1 + num2
    // return result
    return num1+num2
    // after return in function their is no code is executable and if we want to use the some thing inside a code to the outside of the function then we put these thing in return 

}
const result = addtwonums(3,5)
// console.log("Result :",result);

function userloggedin(username = "sam")  {

    if(!username){
        console.log("please Enter a username");
        return
        

    }
    // return `${username} "just logged In"`
    
}
console.log(userloggedin())

// In shopping cart user adds the product countlessly in this situation we use this
// function calculateCartPrice(num1) {
//     return num1
    
// }
// console.log(calculateCartPrice(300));

// function calculateCartPrice(...num1) {
//     return num1
    
// }
// console.log(calculateCartPrice(300,200,400,600));//in this we only find first value and for complete value we use rest operator which is denoted by dots(...) and get the complete answer in array 

// function calculateCartPrice(val1,val2,...num1) { //in this case if the user give the parameters like this only 2 values are console
//     return num1
    
// }
// console.log(calculateCartPrice(300,200,400,600))

//in below we use object and then excess in function
// const user = {

//     name  : "saad",
//     id : 1223


// }

// function objecthandling(anyobject) {
//     console.log(`my name is ${anyobject.name} and my id is ${anyobject.id}`);
    

    
// }
// // objecthandling(user)

// objecthandling({
//     name :"saad", 
//     id:1234,
// })

const myArray = [2,4,5,7,8,] //this method is used for access array by using functions
 function returnthirdvalue(getArray) {
    return getArray[2]
    
 }
//  console.log(returnthirdvalue(myArray))OR
console.log(returnthirdvalue([2,4,5,7,8,]));

 
