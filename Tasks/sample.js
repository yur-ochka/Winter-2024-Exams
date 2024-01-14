// Get one random element from an array
'use strict';
const getElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

module.exports = getElement;
