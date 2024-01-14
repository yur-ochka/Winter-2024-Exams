// Reverse dict, exchange keys and values
'use strict';
const reverse = (data) => {
  let keys = Object.keys(data);
  for (let key of keys) {
    const value = data[key];
    data[value] = key;
    delete data[key];
  }
  return data;
};

module.exports = reverse;
