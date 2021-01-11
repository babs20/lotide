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

module.exports = middle;