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


const middle = array => {
  let midIndex = Math.floor(array.length / 2);
  let middleValues = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      middleValues.push(array[midIndex - 1], array[midIndex]);
    } else if (array.length % 2 === 1) {
      middleValues.push(array[midIndex]);
    }
  }
  return middleValues;
};


assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);