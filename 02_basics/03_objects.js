// singleton agar constractor se banega toh singleton banega 
// Object.create
// object literals

const mySym = Symbol("key1")

const userjs ={

    name : "Muhammad",
    "last name" : "Saad",
    age : 23,
    [mySym]: "key1",
    email : "m.saad17102002@gmail.com",
    isloggedin : false,
    location : "karachi",
    lastloggindate : ["monday", "tuesday","friday"],


}
console.log(userjs);
console.log(userjs["email"]);
console.log(userjs["last name"]);
console.log(userjs.mySym);
console.log(userjs[mySym]);
userjs.email = "saad@gmail.com"; //method of changing any thing in object 
console.log(userjs);
// Object.freeze(userjs)
userjs.name ="aslam"

userjs.greeting = function(){
    console.log("Hello Js User");   
}
userjs.greetingtwo = function(){
    console.log(`Hello Js User, ${this.name}`);}
console.log(userjs.greeting());
console.log(userjs.greetingtwo());










