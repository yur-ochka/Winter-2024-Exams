// Get month number

const Months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const month = (nameOfMonth) => {
  for (let i = 0; i < Months.length; i++) {
    if (nameOfMonth.toLowerCase().startsWith(Months[i])) return i + 1;
  }
  return -1;
};

module.exports = month;