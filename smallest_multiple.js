/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function(ceiling) {
  // do work here

  function primeFactorization(num) {
    if (num < 2) {
      return { 1: 1 };
    }
    let result = {};

    for (let i = 2; i <= num; i++) {
      if (num % i === 0) {
        if (result.hasOwnProperty(i)) {
          result[i]++;
        } else {
          result[i] = 1;
        }
        num = num / i;
        // need i to be two in the next loop, but the loop will end with i incrementing so it has to be one here
        i = 1;
      }
    }
    return result;
  }

  let smallestMultiple = {};
  let result = 1;

  for (let i = 2; i < ceiling; i++) {
    let primeFactors = primeFactorization(i);
    for (const key in primeFactors) {
      if (primeFactors.hasOwnProperty(key)) {
        if (smallestMultiple.hasOwnProperty(key)) {
          if (primeFactors[key] > smallestMultiple[key]) {
            smallestMultiple[key] = primeFactors[key];
          }
        } else {
          smallestMultiple[key] = primeFactors[key];
        }
      }
    }
  }
  for (const key in smallestMultiple) {
    if (smallestMultiple.hasOwnProperty(key)) {
      result *= Math.pow(key, smallestMultiple[key]);
    }
  }

  return result;
};
