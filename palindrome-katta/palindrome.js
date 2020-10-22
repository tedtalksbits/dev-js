//Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes

//example of what function must do:
/*
87 + 78 = 165; 165 + 561 = 726; 726 + 627 = 1353; 1353 + 3531 = 4884

4884 is a palindrome and we needed 4 steps to obtain it, so palindrome_chain_length(87) == 4
*/


var palindromeChainLength = function(n) {

    //a function to take a number and reverse it.
    //12345 = 54321 (not a palindrome)
    //123321 = 123321 (is a palindrome)
    //breakdown- takes a number, convers to a string, use split //to convert to an array, use reverse function, rejoin 
    const reverse = (number) =>  +number.toString().split('').reverse().join('');
    
    //function to check if a number is palindrom
    var isPalindrome = (number) => {
        return number == reverse(number);
        
    }
    // a place to store number of steps 
    let steps = 0;
    let currentNumber = n;
    
    //while currentNumber is not a palindrome
    while (!isPalindrome(currentNumber)){
        //set currentNumber to reversed number + currentNumber
        //increment steps 
        currentNumber = reverse(currentNumber) + currentNumber;
        steps ++;
    }
    //return steps
    return steps;
};