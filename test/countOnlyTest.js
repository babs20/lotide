const countOnly = require('../countOnly');
const expect = require('chai').expect;

describe('#countOnly', () => {
  it('returns that the key "Jason" has a value of 1', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe",
    ];
    const results = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false, "Brady": true });
    expect(results.Jason).to.equal(1);
  });
  it('returns that the key "Karima" has a value of undefined', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe",
    ];
    const results = countOnly(firstNames, { "Jason": true, "Fang": true, "Agouhanna": false, "Brady": true });
    expect(results.Karima).to.equal(undefined);
  });
  it('returns that the key "Fang" has a value of 2', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe",
    ];
    const results = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false, "Brady": true });
    expect(results.Fang).to.equal(2);
  });

  it('returns that the key "Brady" has a value of undefined', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe",
    ];
    const results = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false, "Brady": true });
    expect(results.Brady).to.equal(undefined);
  });
});
