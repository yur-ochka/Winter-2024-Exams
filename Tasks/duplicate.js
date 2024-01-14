// Return an array without duplicates
'use strict';
const duplicate = (value, N) => {
    let res = [];
    for (let i = 0; i < N; i++) {
      res[i] = value;
    }
    return res;
};

module.exports = duplicate;
