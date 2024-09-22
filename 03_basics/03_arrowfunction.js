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
// user.welcomemessage()
// user.username = "aslam"// in this way we are able to change the value because we cant hardcore the value 
// user.welcomemessage()
// console.log(this);// this print show the empty object because it is out of the context or outside in older day when javascript is executed in the browser (this) show the windo

// function chai() {
//     let username = "saad"
//     console.log(this);//This key word only used in the object thatswhy in the function printout its showa windows function
    
    
// }
// chai()

// const chai = function () {
//     let username = "saad"
//     console.log(this);//This key word only used in the object thatswhy in the function printout its showa windows function
    
    
// }
// chai()
//in both style of function the answer is same 


const chai = ()=> {
    let username = "saad"
    console.log(this.username);//also in arrow function is not work reason same 
    
    
}
chai()