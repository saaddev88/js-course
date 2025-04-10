// immediately invoked function expression (iife)

// function chai(){
//     console.log(`how was the chai saad?`);
    
// }
// chai() normal function

// IIFE - IS USED WHERE THERE WAS WE WANT TO NOT POLLULATE OUR FUNCTION WITH SURROUNDING GLOBAL VARIABLES VALUES

(function chai(){
    console.log(`how was the chai saad?`);
    
})();

// ARROW FUNCTION IN IIFE
((num1,num2)=>{console.log(num1+num2)})(10,40)