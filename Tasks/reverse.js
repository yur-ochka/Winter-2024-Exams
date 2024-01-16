// Reverse dict, exchange keys and values
'use strict';
const reverse = (data) => {
  const reversed = {};
  let keys = Object.keys(data);
  for (let key of keys) {
    reversed[data[key]] = key;
  }
  return reversed;
};

module.exports = reverse;
