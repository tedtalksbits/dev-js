//functions can be in an array

function myFunction(){
   return 4;
}

var myList = ['apples','bananas', 12, myFunction];


console.log(myList);
//you can run a function in an array
//myFuntion is index 3 
console.log(myList[3]());






/* ***************************************************** */


//nesting arrays

var myList2 = [
    'Montego Bay',
    'Negril',
    ['Phase 1, Phase 2']
];

console.log(myList2[2]);












/* ******************** Array methods ********************************* */

var myNewList = ['apples','bananas', 12, 'grapes'];

//shift() method => removes first index from array

myNewList.shift();
console.log(myNewList);

//storing the first & last index of the array 

var firstIndex = myNewList.shift();
var lastIndex = myNewList.pop();

console.log(firstIndex, lastIndex);

