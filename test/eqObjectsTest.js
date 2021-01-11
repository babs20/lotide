const eqObjects = require('../eqObjects');
const expect = require('chai').expect;

describe('#eqObjects', () => {
  it(`returns true that ab and ba are equal`, () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    const results = eqObjects(ab, ba);
    expect(results).to.equal(true);
  });
  it(`returns false that ab and abc are not equal`, () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    const results = eqObjects(ab, abc);
    expect(results).to.equal(false);
  });
  it(`returns true that cd and dc are equal`, () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    const results = eqObjects(cd, dc);
    expect(results).to.equal(true);
  });
  it(`returns false that cd and cd2 are not equal`, () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    const results = eqObjects(cd, cd2);
    expect(results).to.equal(false);
  });
  it(`returns true`, () => {
    const results = eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
    expect(results).to.equal(true);
  });
  it(`returns false`, () => {
    const results = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
    expect(results).to.equal(false);
  });
  it(`returns false`, () => {
    const results = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 });
    expect(results).to.equal(false);
  });
});