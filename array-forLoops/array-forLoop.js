//iterate over the values in an array and do math on those values

let total = 0;

let arrayOne = [1, 3, 20, 30, 40, 33, 21, 29, 30, 90];

for (let i = 0; i < arrayOne.length; i++){
    //all values in array
    console.log(arrayOne[i]);
   
    //add all the values in array
    total += arrayOne[i];
}

console.log(total);
