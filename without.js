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

const without = (array, itemsToRemove) => {
  let approvedItems = [];
  for (let i = 0; i < array.length; i++) {
    if (!itemsToRemove.includes(array[i])) {
      approvedItems.push(array[i]);
    }
  }
  return approvedItems;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without([1, 2, "3"], [1, 2]), ["3"]);