const middle = require('../middle');
const expect = require('chai').expect;

describe('#tail', function () {
  context('testing various arrays', function () {
    it('result should equal an array of [3]', function () {
      let result = middle([1, 2, 3, 4, 5]);
      expect(result).to.deep.equal([3]);
    });
    it(`result should equal an array of [2, 3]`, function () {
      let result = middle([1, 2, 3, 4]);
      expect(result).to.deep.equal([2, 3]);
    });
    it(`result should equal an array of []`, function () {
      let result = middle([1, 2]);
      expect(result).to.deep.equal([]);
    });
    it(`result should equal an array of []`, function () {
      let result = middle([1]);
      expect(result).to.deep.equal([]);
    });
  });
});