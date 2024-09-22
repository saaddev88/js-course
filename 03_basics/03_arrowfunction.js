// *************************************ARROW FUNCTION & THIS (KEYWORD)******************************************
// arrow function is come is 2015 when javascript es6 function its replace the critical function into simple form and (this) key word is use for the current context in the scope


const user = {
    username : "saad",
    price : 999,

    welcomemessage : function() {
        console.log(`${this.username} , welcome to website`);// This key word is used for if we want used the value in the current context then we used this key word for the refrence for the value
        // console.log(this); if we only use this function in the console it it can whole whole object and overwriting thing of the object

    }
    
}
user.welcomemessage()
user.username = "aslam"// in this way we are able to change the value because we cant hardcore the value 
user.welcomemessage()
// console.log(this);// this print show the empty object because it is out of the context or outside in older day when javascript is executed in the browser (this) show the windo

function chai() {
    let username = "saad"
//     console.log(this);//This key word only used in the object thatswhy in the function printout its showa windows function
    
    
// }
// chai()

const chai = function () {
    let username = "saad"
//     console.log(this);//This key word only used in the object thatswhy in the function printout its showa windows function
    
    
// }
// chai()
//in both style of function the answer is same 

// syntax of arrow function is ()=>{} or ()=>
const chai = ()=> {
    let username = "saad"
    console.log(this.username);//also in arrow function is not work reason same 
    
    
}
// chai()
// if the braces is used in arrow function then it necessary to used return in the function if we want to used the value outside of scope and it known explicit return 
const anotheruser = (num1,num2) => {
    return num1 + num2
// }

// if the braces is not used in arrow function then it not necessary to used return in the function if we want to used the value outside of scope and it known implicit return in these case the return is by default 

const anotheruser = (num1,num2) => num1 + num2

// it is also return 
const anotheruser = (num1,num2) => (num1 + num2)

// if we want to used object in arrowfunction then this technique is used
const anotheruser = (num1,num2) => ({username : "saad."})

 console.log(anotheruser(2,4));




