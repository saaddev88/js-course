// for of
let myArray =[1,2,3,4,5,6]
for (const index of myArray) {
    console.log(index);
    
    
    
}
// Given an array const colors = ["red", "green", "blue"];
// Use a for...of loop to print each color

const colors = ["red", "green", "blue"];

for (const val of colors) {
    console.log(val);
    
    
}

// Given a string const word = "HELLO";
// Use a for...of loop to print each character on a new line.

const word = "HELLO";

for (const letter of word) {
    console.log(letter);
    
    
}

// Given an array of numbers const numbers = [5, 10, 15, 20];
// Use a for...of loop to calculate and print the sum of all numbers

const numbers = [5, 10, 15, 20];
let sum = 0
for (const num of numbers) {

    
    sum+=num
     
}
console.log(sum);

// Given an array of numbers const marks = [88, 76, 93, 85, 91];
// Use a for...of loop to count how many marks are greater than 90 and print the count.

const marks = [88, 76, 93, 85, 91];
let count = 0
for (const nums of marks) {
    if (nums > 90) {
        // console.log(`the marks greater than 90 : ${nums}`);
        count++

      
        
          

        
    }
    
}
// console.log(count);

// map:

// const arr = new Map()
// arr.set("num1",34)
// arr.set("num2",64)
// arr.set("num3",45)
// arr.set("num4",70)
// arr.set("num5",9)

// // console.log(arr);
// arr.delete("num2")
// console.log(arr);
// arr.set("num2",87)
// console.log(arr);
// console.log(arr.get("num4"));

// Make a new array where each number is tripled.


// const number = [1, 2, 3];

// const newarray = number.map(num => num *3)

// console.log(newarray);

// Convert all names to lowercase.

// const names = ["ALI", "SAAD", "OMAR"];

// const covertNames = names.map(word => word.toLowerCase())


// console.log(covertNames);

// Create a new array of the lengths of these words.


// const words = ["book", "pencil", "eraser"];

// const newWords = words.map(word =>word.length)
// console.log(newWords);

// Multiply each number by its index number.

// const nums = [5, 10, 15];

// const newNum = nums.map((num,index) => index*num)
// console.log(newNum);

// Create an array of greetings like:
// "Good Morning Ali", "Good Morning Ahmed", etc.


const names = ["Ali", "Ahmed", "Sana"];

const newname = names.map(name => `Good Morning ${name}`)
console.log(newname);



