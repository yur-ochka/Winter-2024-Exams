// Filter array by type name
'use strict';
const filter = (array, type) => {
  let remove = [];
  for (let element of array) {
    let indexOfElement = array.indexOf(element);
    if (typeof array[indexOfElement] !== type) remove.unshift(indexOfElement); 
  }
  for (let removedElement of remove) array.splice(removedElement, 1);
  return array;
};

module.exports = filter;
