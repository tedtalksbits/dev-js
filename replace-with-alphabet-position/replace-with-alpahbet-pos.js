/* This function replaces characters in a given string with the alphabetic position
    for example "ABC" would be 123
    there are 26 letters in the alpahbet 
    A is position 1
    and 
    Z is position 26

    example:
    input: "The sunset"
    output: "20 8 5 19 21 14 19 5 20"
*/

function alpahbetPosition(text){
    return text
    //convert given text to uppercase
    .toUpperCase()

    // replace all characters that are NOT(^) uppercase letters
    //from A - Z
    //replace such letters with no space (RegEx)
    //example -> "T'is -the- $SEASON" = "TISTHESEASON"
    .replace(/[^A-Z]/g, '')

    //put each character into an array
    .split('')

    //get the alphabetic position and map it
    //"A".charCodeAt(0) -> gets the ascii number for the character "A" which = [65]
    //"A.charCodeAt(0)-64 -> gets the alphabetic postition of the character "A" which = [1]
    .map(n => n.charCodeAt(0)-64)

    //join back each character alphabet position
    //each must be spaced
    .join(' ');
    
}