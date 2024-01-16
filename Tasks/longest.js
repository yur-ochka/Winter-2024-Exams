// Find longest string
'use strict';
const longest = (line) => {
  let longestLength = -1;
  let longestWord = '';
  for (let word of line) {
        if (word.length > longestLength) {
          longestLength = word.length;
          longestWord = word;
        }
  }
  return longestWord;
};

module.exports = longest;
