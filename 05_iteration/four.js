// Use for...of to print each element in the array:


const animals = ["cat", "dog", "cow"];

for(value of animals){
    // console.log(value);
    
}
// Use for...in to print all the keys and values of:


const student = { id: 101, name: "Ali", grade: "A" };

for(keys in student){
    // console.log(`keys :${keys} and its values is ${student[keys]}`);
    
}

// Use forEach to print "Number: x" for each element:

const numbers = [1, 2, 3, 4];
// numbers.forEach(nums => console.log(nums)
// )
// Use for...of to add all even numbers in an array:


const nums = [10, 15, 20, 25];
let  sum = 0
for(val of nums){
    if (val % 2==0) {
        sum = sum +val
        
        
    }
   
    
    else{
        // console.log(val
        // );
        
    }

}
console.log(`sum of even numbers${sum}`);

// Use forEach to multiply each number by 2 and print the result:


const values = [3, 6, 9];

values.forEach(num => console.log(num*2)
)

// Loop through this string using for...of and print only vowels:


const word = "JavaScript";

vowels = "aeiouAEIOU"
for (const letters of word) {  
    if (vowels.includes(letters)) {
        console.log(`vowels letters:${letters}`);
        
        
    }
 
   
    
}

const names = ["Ali", "Sana", "Ahmed"];

// names.forEach(val => console.log(`hye${val}`)
// )


// Use for...of to sum all the even numbers only from a nested array:
const number = [[2, 3], [4, 5], [6, 7]];
sum = 0
for (const vals of number) {
    for (const val of vals) {
        if (val%2 == 0) {
            sum += val
            
        }        

        
    }
    


    
}
console.log(sum);

// Use for...in to loop through the object and print keys that have string values only:


const person = { name: "Ali", age: 25, city: "Karachi", isStudent: false };

for (const key in person) {
    console.log(`the values of ${key} are ${person[key]}`);
    
    
}

// Loop through this object using for...in and count how many values are greater than 50:


const scores = { math: 45, science: 67, english: 80, urdu: 38 };
let count = 0
for (const subnum in scores){
    if (scores[subnum]> 50){
        count++
       
        
    }
}
console.log(count);

// Use forEach to capitalize the first letter of each name and print them:


const namees = ["saad", "ali", "omer"];

namees.forEach(name => {
  const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
  console.log(capitalized);
});

// Use forEach to print the index and square of each number:
const num = [2, 4, 6, 8];
num.forEach((numb,index)=>{console.log(index),console.log(numb*numb);
;
})




