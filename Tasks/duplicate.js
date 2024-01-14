// Return an array without duplicates
'use strict';
const duplicate = (value, count) => {
    let res = [];
    for (let i = 0; i < count; i++) {
      res[i] = value;
    }
    return res;
};

module.exports = duplicate;
