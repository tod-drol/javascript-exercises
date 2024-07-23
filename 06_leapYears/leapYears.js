/* checks for 29 days in the month of February of the year passed in the
 argument, if true, then that year is a leap year */
const leapYears = function (year) {
  return new Date(year, 1, 29).getDate() === 29;
};

// Do not edit below this line
module.exports = leapYears;
