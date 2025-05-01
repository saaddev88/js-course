const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const number = myNumers.map((nums) => nums +10)

const number = myNumers.map((nums) => nums *10).map((nums)=> nums +1).filter((nums) => nums >=40)


 console.log(number);

//  reduce

// const numbers = [1,2,3,4,5]
// const initialvalue = 0
// const redNumber = numbers.reduce((acc,curr)=> acc+curr,initialvalue)
// console.log(redNumber);

// Find the total price of items in a shopping cart.

// const cart = [
//   { item: 'Shirt', price: 1500 },
//   { item: 'Jeans', price: 2500 },
//   { item: 'Shoes', price: 3000 }
// ];
// const initialvalue = 0
// const redNumber = cart.reduce((acc,curr)=> acc+curr.price,initialvalue)
// console.log(redNumber);

const words = ['JavaScript', 'is', 'awesome'];


  const initialvalue = ""
  const redNumber = words.reduce((acc,curr)=> acc+ (acc ? " ": "")+curr,initialvalue)
  console.log(redNumber);

 