const eqArrays = (arrayOne, arrayTwo) => {
  if (JSON.stringify(arrayOne) === JSON.stringify(arrayTwo)) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = (actual, expected) => {
  eqArrays(actual, expected) === true ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const flatten = array => {
  let flattenedArray = [];
  for (const item of array) {
    if (Array.isArray(item)) {
      for (let j = 0; j < item.length; j++) {
        flattenedArray.push(item[j]);
      }
    } else {
      flattenedArray.push(item);
    }
  }
  return flattenedArray;
};

module.exports = flatten;

// assertArraysEqual(
console.log(flatten([1, 2, [3, 4, 5, 6, 6, 7], 5, []])); // , [1, 2, 3, 4, 5, 6, 6, 7, 5]);