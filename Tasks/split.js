// Split an array into two parts
'use strict';
let split_Array = (index, array) => {
  begin = array.slice(0, index);
  const len = array.length;
  array = array.slice(index, len);
  return [begin, array];
};

module.exports = split_Array;
