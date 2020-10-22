
//basic selectors 
console.log(document.getElementsByTagName('p'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('done'));
console.log(document.getElementsByClassName('checklist'));





//assigning selectors to variables
// the html doc has 2 pTags
//lets assign the first one to a variable called firstPTag

var ptags = document.getElementsByTagName('p');

var firstPTag = ptags[0];


// change html

firstPTag.innerHTML = "New Paragraph";