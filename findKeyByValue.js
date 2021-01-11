const findKeyByValue = function (object, valueToFind) {
  for (const key in object) {
    if (object[key] === valueToFind) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
