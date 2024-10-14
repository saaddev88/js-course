// for of loop

// in these loop you are able to access the value which is under your array inthe form of object and simple array

// ["","","",""]
// [{},{},{},{}]

const arr = [1,2,3,4,5,6]

for (const i of arr) {
    // console.log(i);   
}

const greetings = "hello world!"
for (const greets of greetings) {
    console.log(greets);
    
    
}
// *********************************MAP*****************************************
// THE MAIN DIFFERENCE IN MAP AND SIMPLE OBJECT AND THE MAP(LIKE AS OBJECT) HAS UNIQUE KEY AND VALUE:

const map = new Map()
map.set('pk','pakistan')
map.set('uk','United Kindom')
map.set('ksa','Kindom of saudi Arabia')
map.set('uk','United Kindom')// in this case same value is not print in the map function 
// console.log(map);

// console.log(map.get("uk")

for (const key of map) {

    // console.log(key);
    
}
// in this way you can destructure of an array in that way we can able to separate key and value of an array

for (const [key ,value ] of map) {
    // console.log(key,":-" ,value);
    
}

// TypeError: myobject is not iterable in the below case:
const myobject ={
    game1 : "nfs",
    game2 : "nft"
}
for (const [key,value] of myobject) {
    // console.log(key, ":-" ,value);
    
    
}



