// ************************scope**************************
// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

// if these {} is used in function,if/else condition it is called scope.

// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30



// }
// console.log(a);
// console.log(b);
// console.log(c);// this is the problem we dont use var in any scope because it is print outside of the scope and in scope it is not good because in scope only that thing is out of scope which in return form and var not follow this thats why we dont use var. and which is written in {} it is called block scope and outside of it {} is called global scope
// let a =200
// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30

//     console.log("inner:",a);
    


// }
// console.log(a);

// in the above example the global scope not entered in the block scope and which written in block scope not come outside

function one() {
    username ="saad"
    function two() {
        websitename : "youtube"
        console.log(username);

        
    }
    // console.log(websitename);
    two()
    
    
}
one()
console.log(one());

if (true) {
    const username = "saad"
    if (username === "saad") {
        const website = " youtube"
        console.log(username + website);
        
        
    }
    // console.log(website);
    
    
}

// console.log( "username");
// *********************interesting****************************

// there are two type of function decleration
// in simple form 
// second form in which function is written in the variables


function  addone(num1){
    return num1 +1
    
}

console.log(addone(5));
console.log(addtwo(8));// in this addtwo is not print because it is written before initailization
const addtwo = function addtwo(num2){
    return num2 +2
    
}




