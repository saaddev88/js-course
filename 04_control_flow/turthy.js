// turthy and falsy value 

// falsy value 0,"",nan,big int n0,null,-0,undefined 
// other than all values are true! e.g : "0",[],{},funcion(){},false

useremail = []
if(useremail){
    console.log("get user email!")
}
else{
    console.log("don't get user email");
}
//how to check array is empty or full
if(useremail.length ===0){
    console.log("array is empty");
    
}
 const myobject = {};
 if(Object.keys(myobject).length === 0){
    console.log("object is empty!");
    
  }

//   
//   false ==""
//   true
//   false == 0
//   true
//   0 ==""
//   true

// Nullish coalescing operator (??)
// it always run on null or undefined

const val1 = null ?? 

const val2 = undefined