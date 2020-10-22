let array1 = [2,2,2,2,2];

const reducer = (accumulator , currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer));
//adds all values in array
// does (2+2+2+2+2) expects: 10
console.log(array1.reduce(reducer, 10));
//sum all all in array + 10 = expects : 20



let array2 = [1,1,1,1];
let part2 = array2.reduce(reducer);

console.log(array1.reduce(reducer, part2))