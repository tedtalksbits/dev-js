/*

A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits):

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
    and 1634 (4 digits):

    1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634


The Challenge:
Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.
*/



function narcissistic(value) {
    //formula for number of digits in a number without using .length. ex 123 has 3 digits
    const length =  Math.floor(Math.log10(Math.abs(value))) + 1;
    // a place to store the sum
    let sum = 0;
    let digits = value;

    // while the current value is > than 0 
    while (digits > 0){
        
        //grab the last digit of the number 
        const digit = digits % 10;
        //raise that digit to the length power and add the value to the sum
            sum += Math.pow(digit, length);
            //remove that digit from the value
            digits = Math.floor(digits / 10);
    }
        return sum == value;
  }

  
  console.log(narcissistic( 7 ), true, "7 is narcissistic" );
  console.log(narcissistic( 23 ), true, "23 is not narcissistic" );
  console.log(narcissistic( 371 ), true, "371 is narcissistic" );
  console.log(narcissistic( 1634 ), true, "1634 is narcissistic" );
