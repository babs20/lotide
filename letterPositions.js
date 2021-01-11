const letterPositions = function (sentence) {
  const results = {};
  for (const letter of sentence) {
    if (letter !== ' ') {
      if (results[letter]) {
        let resultsArrary = results[letter];
        let indexOfLastIndex = resultsArrary[resultsArrary.length - 1] + 1;
        results[letter].push(sentence.indexOf(letter, indexOfLastIndex));
      } else {
        results[letter] = [sentence.indexOf(letter)];
      }
    }
  }
  return results;
};

module.exports = letterPositions;
