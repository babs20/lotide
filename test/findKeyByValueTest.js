const findKeyByValue = require('../findKeyByValue');
const expect = require('chai').expect;

describe('#countOfindKeyByValue', () => {
  it(`returns the key 'drama' for the show 'The Wire'`, () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
      anime: "Land of the Lustrous"
    };
    const results = findKeyByValue(bestTVShowsByGenre, "The Wire");
    expect(results).to.deep.equal('drama');
  });
  it(`returns the key 'anime' for the show 'Land of the Lustrous'`, () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
      anime: "Land of the Lustrous"
    };
    const results = findKeyByValue(bestTVShowsByGenre, "Land of the Lustrous");
    expect(results).to.deep.equal('anime');
  });
  it(`returns the key undefined for the show 'That '70s Show'`, () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
      anime: "Land of the Lustrous"
    };
    const results = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    expect(results).to.deep.equal(undefined);
  });
  it(`returns the key 'sciFi' for the show 'The Expanse'`, () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
      anime: "Land of the Lustrous"
    };
    const results = findKeyByValue(bestTVShowsByGenre, "The Expanse");
    expect(results).to.deep.equal('sciFi');
  });
});