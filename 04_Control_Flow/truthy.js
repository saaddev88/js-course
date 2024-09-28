// if we assumed that the value is true or false then we used this formate of checking

// const email = "abc@email.com"
// //  in this we can't compare the condition base we assumed that it is true or false
// if (email) {
//     console.log("we got the user email!");
    
    
// } else {
//     console.log("we don't get the user email");
    
    
// }
// const email = ""
// //  in this we can't compare the condition base we assumed that it is true or false
// if (email) {
//     console.log("we got the user email!");
    
    
// } else {
//     console.log("we don't get the user email");
    
    
// }// in this case the answer is :we don't get the user email (because the email is not present)

const email = []
// //  in this we can't compare the condition base we assumed that it is true or false
// if (email) {
//     console.log("we got the user email!");
    
    
// } else {
//     console.log("we don't get the user email");
    
    
// }// in this case the answer is :we got the user email (because the empty array is present)

// falsy value:

// "",Nan,bigint,null,0.-0,undefined,false

// true values

// " ",[],function(){},{},"false","0"

// if (email.length === 0) {
//     console.log("we got array");
    
    
// }

// const emptyobject = {}
// if (Object.keys(emptyobject).length ===0) {
//     console.log("empty object");
    
    
// }

// false == 0 ans:true, false == "" ans:true,0 == false ans:true

// Nullish Coalescing Operator(??):it is work on null and undefined value let supposed

let val1;
val1 = 10 ?? 5
val1 = null ?? 5
val1 = undefined ?? 17 ?? 4






console.log(val1);

// terniary Operator

// condition ? true : false 

let phoneprice = 1500
phoneprice >= 1300 ? console.log("more than 1300"): console.log("less than 1200");


