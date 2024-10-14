// for each loop


// const coding = ['cpp','py','js','c']
// coding.forEach( function(val) {
// console.log(val);

// })


//  for each loop by arrow function
const coding = ['cpp','py','js','c']
// coding.forEach( (val) => {
// console.log(val);

// })

// function printme(item){
//     console.log(item);
    
// }
// coding.forEach(printme)
// coding.forEach((item,index,arr) =>{
//     console.log(item,index,arr);
    
// })

const mycoding = [
    {language : "javasscript",
        filename :"js"
    },
    {
        language : "python",
        filename :"py"
    },
    {
        lanuguage :"java",
        filename : "java"
    }



]
mycoding.forEach(
    (item) => {
        console.log(item.filename);
          
        
    }

)