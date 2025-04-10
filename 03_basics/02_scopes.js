// scopes

let a = 40
if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("inner",a);
    
}


// console.log(a);
// console.log(b);
// console.log(c);

// global scopes is a thing that is accessable every where and the block scopes is a thing that is accessable inside the {} only
// and var create the problem because it is accessable outside the scope according to the above example.

function one() {

    const username = "saad"
    function two(){
        const websitename = "foodpanda.pk"
        // console.log(username);
    }
    // console.log(websitename);

    two()
    
    
}
one()

if(true){
    const username ="saad"
    if (username === "saad") {
        const websitename = "foodpanda.com"

        // console.log(username + websitename);
        
        
    }
    // console.log(websitename);
    



}
// console.log(username);


// ++++++++++++++++++++++intersting+++++++++++++++++++++++++
// this is normal function and it is accessiable before function defination
console.log(addone(9))

function addone(num){
    return num+1
}


console.log(addTwo(9)) // this create problem beacause it is not call before the variable initiallization because it is expression function!

const addTwo =function addtwo(num){
    return num+2
}