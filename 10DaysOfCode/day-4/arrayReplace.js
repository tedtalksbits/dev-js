// the function should replace the elemToReplace to substitionElem 


function arrayReplace(array, elemToReplace, substitutionElem) {
    
    
    for (let i = 0; i < array.length; i++){
        if (array[i] == elemToReplace){
            array[i] = substitutionElem;
        }
    }
    return array;
}

const array = [1, 2, 1];
const elemToReplace = 1;
const substitutionElem = 3;

// act
const result = arrayReplace(array, elemToReplace, substitutionElem);

console.log(result)

/**
expect(result).toEqual([3, 2, 3]);
*/

        
