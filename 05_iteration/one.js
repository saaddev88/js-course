// For Loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("great number in list");
    }
    // console.log(element);
    
    
}

for (let i = 1; i <= 10 ; i++) {
    // console.log(`outer loop ${i}`);
    
    for (let j = 1; j <= 10 ; j++) {
        // console.log( i + "*" + j + "="+ i * j);
        
        
    }
}

let myArray = ['ali','saad','hassan']

// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// Break and Continue

for (let index = 1; index <= 20; index++) {
    const element = index;
    if (element == 5) {
        // console.log("dedected 5");
        break
        
        
    }
    // console.log(`the value of i: ${element}`);
    
    
}
for (let index = 1; index <= 20; index++) {
    const element = index;
    if (element == 5) {
        // console.log("dedected 5");
        continue
        
        
    }
    // console.log(`the value of i: ${element}`);
    
    
}