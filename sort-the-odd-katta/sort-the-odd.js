function sortArray(array) {

    var oddArray = [];

    //loop over given array, check if each digit is not even and push it into oddArray.
    for (var i = 0; i < array.length; i++){


        if(array[i] % 2 !== 0){

            oddArray.push(array[i]);

        }//ends If

    }//ends oddArray push loop

    //sorts by smallest to largest
    // return b - a will sort by largest smallest 

    oddArray.sort(function(a,b){
        return a - b;
    });//ends sort

    // loop over array and replace the digits with sorted digits 

    for (var j = 0; j < array.length; j++){

        if (array[j] % 2 !== 0){
            
            array[j] = oddArray.shift();
        }//ends If 

    }//ends oddArray shift loop



    return array;
}//ends function

console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
console.log(sortArray([]),[])