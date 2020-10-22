
//this function should return some string in parens == '(some string)'
function enclosedInBrackets(str){

    //return "("+str+");"

    return `(${str})`;
}


const str = 'Yo';

const result = enclosedInBrackets(str);

console.log(result);

//expects '(Yo)'