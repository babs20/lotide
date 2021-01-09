const eqArrays = function (arrayOne, arrayTwo) {
  if (JSON.stringify(arrayOne) === JSON.stringify(arrayTwo)) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function (actual, expected) {
  eqArrays(actual, expected) ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const letterPositions = function (sentence) {
  const results = {};
  for (const letter of sentence) {
    if (letter !== ' ') {
      if (results[letter]) {
        let resultsArrary = results[letter];
        let indexOfLastIndex = resultsArrary[resultsArrary.length - 1] + 1;
        results[letter].push(sentence.indexOf(letter, indexOfLastIndex));
      } else {
        results[letter] = [sentence.indexOf(letter)];
      }
    }
  }
  return results;
};


let results = letterPositions('hell lo');
assertArraysEqual(results.h, [0]);
assertArraysEqual(results.e, [1]);
assertArraysEqual(results.l, [2, 3, 5]);
assertArraysEqual(results.o, [6]);

console.log(letterPositions('hell lo'));