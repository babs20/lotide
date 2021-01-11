const { expect } = require('chai');
const assertEqual = require('../assertEqual');
const tail = require('../tail');


describe('#tail', function () {
  context('testing array ["Hello", "How", "Are", "You"]', function () {
    it('should return array length as 3', function () {
      let result = tail(["Hello", "How", "Are", "You"]);
      expect(result.length).to.deep.equal(3);
    });
    it(`should return first element of the array as 'How'`, function () {
      let result = tail(["Hello", "How", "Are", "You"]);
      expect(result[0]).to.deep.equal('How');
    });
    it(`should return second element of the array as 'Are'`, function () {
      let result = tail(["Hello", "How", "Are", "You"]);
      expect(result[1]).to.deep.equal('Are');
    });
  });

  context('testing array []', function () {
    it('should return array length as 0', function () {
      let result = tail([]);
      expect(result.length).to.deep.equal(0);
    });
    it(`should return first element of the array as undefined`, function () {
      let result = tail([]);
      expect(result[0]).to.deep.equal(undefined);
    });
    it(`should return second element of the array as undefined`, function () {
      let result = tail([]);
      expect(result[1]).to.deep.equal(undefined);
    });
  });

  context(`testing array ['One']`, function () {
    it('should return array length as 0', function () {
      let result = tail(['One']);
      expect(result.length).to.deep.equal(0);
    });
    it(`should return first element of the array as undefined`, function () {
      let result = tail(['One']);
      expect(result[0]).to.deep.equal(undefined);
    });
    it(`should return second element of the array as undefined`, function () {
      let result = tail(['One']);
      expect(result[1]).to.deep.equal(undefined);
    });
  });
});
