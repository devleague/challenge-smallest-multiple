/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function (ceiling) {
  let gamut = [];
  let number = 2;
  let pass = 0;

  for (let i = 1; i <= ceiling; i++) {
    gamut.push(i);
  }

  while (pass < gamut.length) {
    for (let x = 0; x < gamut.length; x++) {
      if (number % gamut[x] === 0) {
        pass++
      } else {
        pass = 0;
        number += 2;
        break;
      }
    }
  }


  return number;
};