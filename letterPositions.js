const eqArrays = function(arrayOne, arrayTwo) {
  if (JSON.stringify(arrayOne) === JSON.stringify(arrayTwo)) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(actual, expected) {
  eqArrays(actual, expected) ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const letterPositions = function(sentence) {
  const results = {};
  for (const letter of sentence) {
    if (results[letter]) {
      let resultsArrary = results[letter];
      let indexOfLastIndex = resultsArrary[resultsArrary.length - 1] + 1;
      results[letter].push(sentence.indexOf(letter, indexOfLastIndex));
    } else {
      results[letter] = [sentence.indexOf(letter)];
    }
  }
  return results;
};


let results = letterPositions('helllo');
assertArraysEqual(results.h, [0]);
assertArraysEqual(results.e, [1]);
assertArraysEqual(results.l, [2, 3, 4]);
assertArraysEqual(results.o, [5]);

assertArraysEqual(letterPositions("hello").e, [1]);