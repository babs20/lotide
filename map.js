const eqArrays = (arrayOne, arrayTwo) => {
  if (JSON.stringify(arrayOne) === JSON.stringify(arrayTwo)) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = (actual, expected) => {
  eqArrays(actual, expected) ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, word => word[word.length - 1]), ['d', 'l', 'o', 'r', 'm']);
assertArraysEqual(map(words, word => word[word.length - 2]), ['n', 'o', 't', 'o', 'o']);
