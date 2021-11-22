//      https://codepen.io/mbonzi/pen/bGrypQN?editors=0011

/* Refactored this code to ternary operator 
if (1+1===2) {
  console.log('It is true that 1+1 equals 2.');
} else {
  console.log('It is false that 1+1 equals 2.');
}
*/
console.log(1+1===2 ? 'It is true that 1+1 equals 2.' : 'It is false that 1+1 equals 2.');


/* Refactor Challenge #2 
if (0) {
  console.log('0 evaluates as true.');
} else {
  console.log('0 evaluates as false.');
}
*/
console.log(0 ? '0 evaluates as true.' : '0 evaluates as false.');


 //Refactor Challenge #3
let hungry = true;
/* if (hungry) {
  console.log('Go eat something.');
} else {
  console.log('Keep coding!');
} */
console.log(hungry ? 'Go eat something.' : 'Keep coding');

// Refactor Challenge #4! The code you need to refactor is inside the function. For this one, go ahead and replace the contents of this function, rewritten using the ternary operator. You should be able to accomplish this in a single line. 
const isEven = (dice) => {
  /*if ( dice % 2 ) {  
    return false;
  } 
  return true; */
  return(dice % 2) ? false : true; 
}



// This is just code to supplement Refactor Challenge #4; you do not need to do anything with it.
const MAX = 6;
let dice = Math.floor(Math.random() * MAX + 1);
console.log(`You need to roll an odd number to win:\n
  You roll the dice... It tumbles and comes to a stop, showing ${dice} ${(dice > 1) ? 'pips' : 'pip'}! -- ${isEven(dice) ? 'Better luck next time!' : 'You win!'}`);
