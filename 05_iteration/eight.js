const numbers = [1,2,3,4,5,6,7,8,9,10]

const newnums = numbers.reduce((acc,currval)=> acc+currval,0)
console.log(newnums);

const myobject=[
    {
        name : "saad",
        age : 12
    },{
        name: "ayesha",
        age: 10
    },{
        name :"hassan",
        age :24
    },{
        name :"hafiz",
        age :18
    }
]
const newthings = myobject.reduce((acc,item)=> acc+item.age,0)
console.log(newthings);

