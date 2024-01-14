// Split an array into two parts
'use strict';
let splitArray = (index, array) => {
  let begin = array.slice(0, index);
  array = array.slice(index, array.length);
  return [begin, array];
};

module.exports = splitArray;
