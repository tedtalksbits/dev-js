
/* THIS PROGRAM COUNTS THE NUMBER OF VOWELS (A,E,I,O,U) IN A 
                        GIVEN STRING
*/
function getCount(str) {


    //a place to store the counter
    var vowelsCount = 0;

    //iterate over the given string
    for (let i = 0; i < str.length; i++){

        //a place to store the current letter being compared
        var currentLetter = str[i];

        //switch statement to compare current letter
        switch (currentLetter){

            case "a": vowelsCount++;
            break;
            case "e": vowelsCount++;
            break;
            case "i": vowelsCount++;
            break;
            case "o": vowelsCount++;
            break;
            case "u": vowelsCount++;
            break;
        }
    }

    //return the new value of vowelsCount
    return vowelsCount;
}

/* Less verbose - Same result */
//not my code

function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }