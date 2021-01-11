const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) { //check length
    for (const key in object1) { //loop through pairs
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!object2.hasOwnProperty(key) || !eqArrays(object1[key], object2[key])) { // check if keys and values match
          return false;
        }
      } else if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
        if (!eqObjects(object1[key], object2[key])) {
          return false;
        }
      } else if (!object2.hasOwnProperty(key) || (object1[key] !== object2[key])) { // check if keys and values match
        return false;
      }
    }
    return true;
  } return false; // if not the same length === false
};

module.exports = eqObjects;