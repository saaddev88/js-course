const userdetails = {
    username :"saad",
    price :999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
        
    }

}
// userdetails.welcomeMessage()
// userdetails.username= "aslam"
// userdetails.welcomeMessage()

console.log(this);

function chai(){

    let username = "honey"
    console.log(this.username);// this is mostly work on the object
    
}
chai()

// this work same in arrow function

// +++++++++++++++++++++++++++++++++arrow-functions++++++++++++++++++++++++++++++++++++

// const addnum =(num1,num2) => {return num1+num2} //explicit form

// console.log((addnum(5,4)))

const addnum =(num1,num2) => num1+num2 //implicit form //agar apne arrow function ke main mein () use kre to return lagana parhega lazmi otherwise zarurat nahi

console.log((addnum(5,4)))

const user = (username) => ({username:"saad"})
console.log(user());


