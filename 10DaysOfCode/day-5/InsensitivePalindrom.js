function caseInsensitivePalindrome(str) {
    //covert str to all lower or uppercase
    Oldstr = str.toLowerCase();

    //create a reverse function
    const reverse = (input) =>  input.toLowerCase().split('').reverse().join('');
    //not necessary but stored rev(str) to a variable
    var newStr = reverse(str);

    //logic: compare if reverse == original   
    if (newStr == Oldstr){
        console.log(str, newStr);
    }
        else{
            console.log(newStr, newStr);
        };
}

const str = 'helleh';
        
// act
const result = caseInsensitivePalindrome(str);

// log
console.log("result 1: ", result);