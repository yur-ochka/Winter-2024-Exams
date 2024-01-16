// Get day number
'use strict';
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (nameOfDay) => {
  const lengthOfDays = DAYS.length;
  for (let i = 0; i < lengthOfDays; i++) {
    const dayInLowerCase = DAYS[i].toLowerCase();
    if (nameOfDay.startsWith(dayInLowerCase)) return i + 1;
  }
  return -1;
};

module.exports = parseDay;
