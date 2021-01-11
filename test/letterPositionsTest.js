const letterPositions = require('../letterPositions');
const expect = require('chai').expect;

describe('#countOnly', () => {
  it('returns the index [0] for the letter "h"', () => {
    const results = letterPositions('hell lo');
    expect(results.h).to.deep.equal([0]);
  });
  it('returns the index [1] for the letter "e"', () => {
    const results = letterPositions('hell lo');
    expect(results.e).to.deep.equal([1]);
  });
  it('returns the index [2, 3, 5] for the letter "l"', () => {
    const results = letterPositions('hell lo');
    expect(results.l).to.deep.equal([2, 3, 5]);
  });
  it('returns the index [6] for the letter "o"', () => {
    const results = letterPositions('hell lo');
    expect(results.o).to.deep.equal([6]);
  });
});
