const eqArrays = (arrayOne, arrayTwo)=> {
  if (JSON.stringify(arrayOne) === JSON.stringify(arrayTwo)) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(actual, expected) {
  eqArrays(actual, expected) === true ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);