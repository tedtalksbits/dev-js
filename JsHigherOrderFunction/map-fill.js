//map function allows you to pass a function and apply it to all values in the array
//map wont affect current array, it returns a new array
let arr = [4,8,6,4,1];


//a function to sqr a value
function sqr (x){
    return x * x;

    // x = 10 
    // expects 100
};

// use map() to sqr the value of all numbers in the arr array
let newArr = arr.map(sqr);

//expects [16,64,36,16,1]
console.log(newArr);

// arrow function 
arr = arr.map(x => x * x);

console.log(arr)

/*  
    write a function that returns a given string with - at the beginning and - and the end of each word.

    example:
    given word: "kite"
    expects: "-kite-"
*/

let words = ["Hello", "GoodBye", "Whats Up"]
function quotes(str){
    return `-${str}-`;
}

let newWords = words.map(quotes);
console.log(newWords)

//expects ['-Hello-', '-GoodBye-', '-Whats Up-']




/******************************* using FILL() ********************************/

//The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). 
//It returns the modified array.

const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]


/************** Challenge!!! ****************/
//use the fill() and map () method to fill an array with 100 random values 

//create an array with 100 spots
let vals = new Array(100);

//first fill each index in array using fill(), then map each value with a random number
vals = vals.fill().map(x => Math.floor(Math.random()*100));

console.log(vals)