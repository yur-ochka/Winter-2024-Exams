// Find an intersection of two dictionaries
'use strict';
const intersection = (object1, object2) => {
  let commonElements = {};
  let firstKeys = Object.keys(object1);
  for (let attributeName of firstKeys) {
    if (object1[attributeName] === object2[attributeName]) commonElements[attributeName] = object1[attributeName]; 
  }
  return commonElements;
};

module.exports = intersection;
