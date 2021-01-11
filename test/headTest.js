// const assertEqual = require('../assertEqual');
const head = require('../head.js');
const expect = require('chai').expect;

describe('#head', () => {
  it('returns 1 for [1, 2, 3]', () => {
    expect(head([1, 2, 3])).to.equal(1);
  });
  it(`returns '5' for ['5']`, () => {
    expect(head(['5'])).to.equal('5');
  });
  it(`returns 5 for [5, 6, 7])`, () => {
    expect(head([5, 6, 7])).to.equal(5);
  });
  it(`returns 'Hello' for ["Hello", "Lighthouse", "Labs"]`, () => {
    expect(head(["Hello", "Lighthouse", "Labs"])).to.equal("Hello");
  });
  it(`returns undefined for []`, () => {
    expect(head([])).to.equal(undefined);
  });
});


