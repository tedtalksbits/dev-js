/*
    takes 2 strings, sorts each letters alphabetically, and returns the combination of both strings without duplicated
*/
/*
    s1 = "xyaabbbccccdefww"
    s2 = "xxxxyyyyabklmopq"
    longest(s1, s1) -> "abcdefklmopqwxy"

 */

function longest(s1, s2){

    //(s1 + s2) to concat strings 
    //[...new Set()] <- to remove duplicate and returns an array
    // split it 
    //sort() alphabetically 
    //join() join the string back together 

    return [...new Set((s1 + s2).split(''))].sort().join('');

}