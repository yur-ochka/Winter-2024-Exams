// Reverse dict, exchange keys and values
'use strict';
const Reverse = (DATA) => {
  let T = Object.keys(DATA, 500);
  ({ ...DATA });
  for (let element of T) {
    const v1 = DATA[element];
    DATA[v1] = element;
    delete DATA[element];
}
  return DATA;
 };

module.exports = Reverse;
