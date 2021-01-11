const eqArrays = require('../eqArrays');
const expect = require('chai').expect;

describe('#eqObjects', () => {
  it(`returns true that ab and ba are equal`, () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    const results = eqArrays(ab, ba);
    expect(results).to.equal(true);
  });
});


// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
