/*  

Count Change	    Cards
    +1	        2, 3, 4, 5, 6
    0	        7, 8, 9
    -1	        10, 'J', 'Q', 'K', 'A'

*/

/*
 You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Output
-3 Hold
5 Bet
 */


 /* 

            ÷BREAK DOWN OF CHALLENGE÷
    if card = 2, 3, 4, 5, 6 then count ++sF
    if card = 7, 8, 9 then do nothing 
    if card = 10, 'J', 'Q', 'K', 'A' then count --
 */

var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count ++;
      break;

    case 10:
    case "J":
    case "Q":
    case "K":
    case 'A':
      count --;
      break;
  }
  var betOrHold = '';
  if (count > 0){
    betOrHold = "Bet";
  }
  else {
    betOrHold = "Hold";
  }
  return `${count} ${betOrHold}`;

}

cc(2); cc(3); cc(7); cc('K'); cc('A');
