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
    return `${username} "just logged In"`
    
}
console.log(userloggedin())

