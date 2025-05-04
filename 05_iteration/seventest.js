// test by hassan bhai
const fruits =["orange","apple","mango","banana","pineapple","watermelon"]

fruits.forEach((val,index)=> 
    {if( index % 2==0){
    // console.log(val)
    
}
})

// newFruits ka array hona chaiye, usme sab fruits ke agey NEW ana chaiye

const newFruits = fruits.map((items)=> "new"+items)
console.log(newFruits);



// new array banega, fruitsLength usme kya hoga sare fruits ka array he na, isme name ki jagah uski length ajayegi
const newarr = fruits.map((item)=>item.length)
console.log(newarr);

// new array banega, Usme srf wo wale fruits hone chaiye jisme 'n' or 'N' ata he

const arr = fruits.filter((fruit)=>
    {

        if (fruit.includes("n" ) || fruit.includes("N")) {

            return fruit
            
        
    }
}


)
console.log(arr);

// 🧠 Task: Add Length Info to Fruits (Using .map)
// You are given:

const fruit = ['Mango', 'Apple', 'Banana'];

// Goal: Create a new array of objects like this:

const modified = fruit.map((value)=> ({value: value, 
    length: value.length})) 
console.log(modified);
