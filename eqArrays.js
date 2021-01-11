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

module.exports = eqArrays;

// const eqArrays = (arrayOne, arrayTwo)=> {
//   if (JSON.stringify(arrayOne) === JSON.stringify(arrayTwo)) {
//     return true;
//   } else {
//     return false;
//   }
// };
