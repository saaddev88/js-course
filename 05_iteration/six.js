const coding = ['cpp','py','js','c']

// coding.forEach((item)=>console.log(item)
//  )
//  console.log(item);
 
//  in for each the item is not out from the scope thatswhy we are using flter for this typ of problem

let newnums = [1,2,3,4,5,6,7,8,9,10]

// const numbs = newnums.filter((num)=> num > 4 )

// console.log(numbs);

// and this is also done in he for each loop

// const mynums =[]

// newnums.forEach((num)=>
//    { if (num > 4) {

//         mynums.push(num)
        
//     }

//    }
// )
// console.log(mynums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

 let userbooks = books.filter( (bk) => bk.genre === 'HIstory')
 console.log(userbooks);

 userbooks = books.filter((bk)=> {return bk.genre === 'Science' && bk.publish >=2000})
 console.log(userbooks);
 