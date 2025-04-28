// for loops
for (let i = 0; i < 11; i++) {
    const element = i
    if (element == 5) {
        console.log("5 is the best number");
        
        
    }


    console.log(i);
    
}
for (let i = 0; i < 11; i++) {
    console.log(i);
    
    for (let j = 0; j < 11; j++) {
        console.log(`innrelopp${j} && outerloop${i}`);
        
        
        
    }
    
}
for (let i = 0; i < 11; i++) {
    console.log(i);
    
    for (let j = 0; j < 11; j++) {
        console.log(i + "*" + j +"=" + i*j);

        
        
        
    }
    
}
let myArray =['safeguard','jamandar','burqaavenger']
console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
  
    

    
    const element = myArray[i];
    // console.log(element.length);
    

    console.log(element);
    
    
}
// break and continue statement:
// break stops the runing code aur series of function and continue resume the sets of function aud other things

// for (let index = 1; index < 20; index++) {
//   if (index == 5) {
//     console.log("5 is detected!");
//     break
    
    
//   }
  
  
//   console.log(index);
  
  
// }
for (let index = 1; index < 20; index++) {
  if (index == 5) {
    console.log("5 is detected!");
    continue
    
    
  }
  
  
  console.log(index);
  
  
}

