const sumAll = function (start, end) {
  // create a loop that iterates from the start to the end and each iteration adds to result
  let sum = 0;
  if (start < end) {
    for (let i = start; i <= end; i++) {
      sum += i;
    }
  } else if (start > end) {
    for (let i = start; i >= end; i--) {
      sum += i;
    }
  } else {
    return sum = "ERROR";
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
