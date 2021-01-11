const assertEqual = function (actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLeters = function (sentence) {
  if (typeof sentence !== 'string') {
    return 'Please enter a string!';
  }

  let letterTally = {};
  let noSpaces = sentence.split(' ');
  let stringInit = noSpaces.join('').toLowerCase();

  for (const letter of stringInit) {
    if (letterTally[letter]) {
      letterTally[letter] += 1;
    } else {
      letterTally[letter] = 1;
    }
  }
  return letterTally;
};

module.exports = countLeters;

let result = countLeters('lighthouse in the house');
assertEqual((result.h), 4);

result = countLeters('LHL');
assertEqual((result.h), 1);

result = countLeters(5);
assertEqual((result), 'Please enter a string!');
