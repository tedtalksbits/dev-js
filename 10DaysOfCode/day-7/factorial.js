function factorialNumber(num) {
    
    // example 5! = 1*2*3*4*5 = 120
    
    var factorial = 1;
    
    for (let i = 1; i <= num; i++){
        factorial *= i;
    }

    return factorial;

}


const num = 5;
        
// act
const result = factorialNumber(num);

// log
console.log("result: ", result);