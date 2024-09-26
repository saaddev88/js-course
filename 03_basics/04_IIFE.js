// *********************IIFE*****************************************
//  Immediately Invoked Function Expression

// iife is used to save your function from global function thing and if we want executed any function immediately then it is used. and also we wrapped up our function in ()like this:
// below function is named iife
(function chai(){
    console.log("hello");
    
})();
// ; IS USED WHEN MORE THEN ONE FUNCTION IS WRITTEN IN CODE, it used for separation
// below function unnamed iife
(() =>console.log("hello"))();
// IN FIRST(IN THIS WE WRITE FUNCTION DEFINATION) AND IN SECOND()WE EXECUTED THE FUNCTION
((NAME) =>console.log(`HELLO , ${"SAAD"}`))("SAAD") // WE USED NAME IN THIS WAY
