const eqArrays = require('../eqArrays');
const expect = require('chai').expect;

describe('#eqArrays', () => {
  it(`returns false that both arrays are not equal`, () => {
    const results = eqArrays(["1", "2", "3"], ["1", "2", 3]);
    expect(results).to.equal(false);
  });
  it(`returns true that both arrays are equal`, () => {
    const results = eqArrays([[2, 3], [4]], [[2, 3], [4]]);
    expect(results).to.equal(true);
  });
  it(`returns false that both arrays are not equal`, () => {
    const results = eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]);
    expect(results).to.equal(false);
  });
  it(`returns false that both arrays are not equal`, () => {
    const results = eqArrays([[2, 3], [4]], [[2, 3], 4]);
    expect(results).to.equal(false);
  });
});


// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
