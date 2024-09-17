// const newuser = new Object() this is singleton object
const newuser = {} // This is non-singleton object there is no difference in output of singleton object and non-singleton object
console.log(newuser);
 newuser.id ="abc123"
 newuser.name ="saad"
 newuser.isloggedin = false
 console.log(newuser);
 
const anotheruser = {

    email: "abcd@abcd.com",
    fullname:{
        userfullname:{
            firstname: "muhammad",
            lastname: "saad"

        }
    }
}
console.log(anotheruser.fullname.userfullname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
// const obj3 ={ obj1 , obj2}

// const obj3 = Object.assign({},obj1 ,obj2)
const obj3 ={...obj1,...obj2} // we will use this method for joining the 2 object into single objects
console.log(obj3);
// some time the value is come from data base in these form 
const user =[

{
    id : "1",
    name: "saad"
},
{
    id : "1",
    name: "saad"
},
{
    id : "1",
    name: "saad"
},
{
    id : "1",
    name: "saad"
}
]
// console.log(user[1].id);
// console.log(anotheruser);
// console.log(Object.keys(anotheruser));
// console.log(Object.values(anotheruser));
// console.log(Object.entries(newuser));

// console.log(newuser.hasOwnProperty("area"));

const course ={
    coursename:"js-hindi",
    courseinstructor:"hitesh"
}

const {courseinstructor: instructor} = course
// console.log(courseinstructor);
console.log(instructor);

// API -JSON
// mention below is the api formate in which all all api given us.
// {
//     "name" :"saad"
//     "email" : "abc@c.com"
//     "id" :"abc34"
// }

// [
//     {},
//     {},
//     {},
//     {},
//     {},
// ]









