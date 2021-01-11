const flatten = require('../flatten');
const expect = require('chai').expect;

describe('#flatten', () => {
  it('returns [1, 2, 3, 4, 5, 6, 6, 7, 5] for [1, 2, [3, 4, 5, 6, 6, 7], 5, []]', () => {
    const results = flatten([1, 2, [3, 4, 5, 6, 6, 7], 5, []]);
    expect(results).to.deep.equal([1, 2, 3, 4, 5, 6, 6, 7, 5]);
  });
  it('returns [1] for [1]', () => {
    const results = flatten([1]);
    expect(results).to.deep.equal([1]);
  });
  it('returns [] for []', () => {
    const results = flatten([]);
    expect(results).to.deep.equal([]);
  });
  it('throws an error for more than one level of array nesting.', () => {
    expect(flatten).to.throw(Error);
  });
});
