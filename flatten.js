const flatten = array => {
  let flattenedArray = [];
  for (const item of array) {
    if (Array.isArray(item)) {
      for (let j = 0; j < item.length; j++) {
        if (Array.isArray(item[j])) {
          throw Error;
        }
        flattenedArray.push(item[j]);
      }
    } else {
      flattenedArray.push(item);
    }
  }
  return flattenedArray;
};

module.exports = flatten;