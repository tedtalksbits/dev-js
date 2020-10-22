var array = ["a", "aa", "aaa", "aaaaa", "aaaaaa"];

let sortedArray = [];

var longest = array.reduce(function(a, b) { 
    if(a > b){
        sortedArray.push(a);
    }
    else{
        sortedArray.push(b);
    }
}, '');

sortedArray.sort(function(a,b){
  return b.length - a.length ;
});

console.log(sortedArray);


//less verbose
var array = ["a", "aa", "aaa", "aaaaa", "aaaaaa"];

function sortByLength(array){
  return array.sort((a, b)=> a.length - b.length);
  
};
