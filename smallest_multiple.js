/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */

// check for perfect divisibility with the modulus operator.
module.exports = function( ceiling ) {
  // ceiling = 10; test 2: ceiling = 20;
  const numbers = [ ]; // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let result = 1;
  let gotSolution = false; // need a tracking variable to fire passes

  // make an array with numbers up to the ceiling
  for (let i = 1; i <= ceiling; i++) {
    numbers.push(i);
  }
  
  // count passes
  while (!gotSolution) {
    // if the loop even finds one wrong solution, it will increment result and break the loop. the if statement must pass (ceiling) times to pass the test
    for (let i = 0; i < numbers.length; i++) {
      // test all the numbers' divisibility with the result number
      if (result % numbers[i] === 0) {
        gotSolution = true;
      } else {
        // if there wasn't a match then...
        gotSolution = false; // instructs the while loop to repeat. this time we change the result
        result++;
        break;
      }
    }
  }

  return result;
};