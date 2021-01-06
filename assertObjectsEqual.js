const eqArrays = function(arrayOne, arrayTwo) {
  if (JSON.stringify(arrayOne) === JSON.stringify(arrayTwo)) {
    return true;
  } else {
    return false;
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) { //check length
    for (const key in object1) { //loop through pairs
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!object2.hasOwnProperty(key) || !eqArrays(object1[key], object2[key])) { // check if keys and values match
          return false;
        }
      } else if (!object2.hasOwnProperty(key) || (object1[key] !== object2[key])) { // check if keys and values match
        return false;
      }
    }
    return true;
  } return false; // if not the same length === false
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  eqObjects(actual, expected) ? console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);

};

assertObjectsEqual({ c: "1", d: ["2", 3, 4] }, { c: "1", d: ["2", 3, 4] });
assertObjectsEqual({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3] });
assertObjectsEqual({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] });