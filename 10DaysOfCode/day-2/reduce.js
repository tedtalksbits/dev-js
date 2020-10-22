//using reduce to add all values in an array

const numberArray = [1,2,3,4,5];

const total = numberArray.reduce(sum, 0);

function sum(acc, val){
    return acc + val;
};

console.log(total);


//getting max from an array

const newArray = [1092,2634,3342,462];

const max = newArray.reduce(callback, -Infinity);

function callback(acc, val){
    if(acc > val){
        return acc;
    }
    else{
        return val;
    }
};

console.log(max);