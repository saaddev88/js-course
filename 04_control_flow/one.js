// Control flow

// if(condition){
//     scope

// }

// if the value is only true then the condition is run
// if(true){}
// if the value is only false then the condition is run
// if(false){}

// conditional checker ==,>,<,>=,<=,!=,====

// proper defination of if else condition mentioned below:

 const mark = 55
 if(mark > 50){
    console.log("your student has been passed to the next class");
    
 }
 else{
    console.log("fail");
    
 }
 //only use let and const because it maintain the block scope and not create the problems

 //in if else condition shorthand notation is not preferrable because it is complicated and not easy to understand 

//  if (amount>1000) console.log("you are able to withdraw"),console.log("cash");

const balance = 1000

if(balance <500){
    console.log("less than 500");
    
}
else if(balance <750){
    console.log("less than 750");


}
else if(balance < 900){
    console.log("less than 900");

}
else{

    console.log("balance is less than 1200");
    
}
const userloggedin = true
const debitcard = true

if(userloggedin &&debitcard){
    console.log("you are able to shop");
    
}

const loggedinfromgoogle = false
const loggedinfromemail = true

if(loggedinfromemail || loggedinfromgoogle){
    console.log("welcome to your account");
    
}
 