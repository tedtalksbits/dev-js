// this was all typed while i was somewhat drunk

/***********************  DAY 1 ************************/
// Promt 1 - Create a function that returns the the SUM of 2 numbers 


function add(x, y){
    return x + y;
};

console.log(add(5,5));


// Promt 2 - Create a function that returns the the SUM of ALL numbers regardless of parameters


function AddingAll(){
    let addition = 0;
    for(let i = 0; i < arguments.length; i++){
        addition += arguments[i];
    
    }
    return addition;
};

console.log(AddingAll(1,2,3,4,4,5,6))
