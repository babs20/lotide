const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// const eqArrays = (arrayOne, arrayTwo)=> {
//   if (JSON.stringify(arrayOne) === JSON.stringify(arrayTwo)) {
//     return true;
//   } else {
//     return false;
//   }
// };

const eqArrays = (arrayOne, arrayTwo) => {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (const i in arrayOne) {
    if (Array.isArray(arrayOne[i]) && Array.isArray(arrayTwo[i])) {
      if (!eqArrays(arrayOne[i], arrayTwo[i])) {
        return false;
      }
    } else if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};



assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);


assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
