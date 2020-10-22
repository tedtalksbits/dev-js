// Challenge: Total Price

/*
 1. Give our customer their total price. 
 2. Add the price of the items together with a sales tax of 8%.
 3. Log the price. 
*/

const cartItems = [
    {quantity: 1, price: 5},
    {quantity: 3, price: 4},
    {quantity: 10, price: 1}
    
];

//console.log(cartItems.length) //-> outputs 3

// regular for loop
let total = 0;
/* for (let i = 0; i < cartItems.length; i++){
   
    //total = quantity * price
    total += cartItems.quantity[i] * cartItems.price[i];
} */

/* use control + shift + A -> multi-line comment! */

//for of loop

for (const cartItem of cartItems){
    total += cartItem.price * cartItem.quantity;
}

total *= 1.08;

console.log(total);
