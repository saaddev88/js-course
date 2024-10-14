const mynumbers = [1,2,3,4,6,8,7]

// const newnums = mynumbers.map((num)=>{return num +10})
// console.log(newnums);


const mynums = mynumbers
                        .map((num)=> num*10)
                        .map((num)=> num+1)
                        .filter((num)=> num>=51)
console.log(mynums);


