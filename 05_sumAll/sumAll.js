const sumAll = function (start, end) {
  /* 
   create a loop that iterates from the start to the end and each iteration adds to result even if
   the starting number is higher than the ending number
  */
  let sum = 0;
  //   checks for integers, typeof number is valid and that start is more than end
  if (
    start < end &&
    start >= 0 &&
    start % 1 === 0 &&
    end % 1 === 0 &&
    typeof start === "number" &&
    typeof end === "number"
  ) {
    for (let i = start; i <= end; i++) {
      sum += i;
    }
    //   checks for integers, typeof number is valid and that start is less than end
  } else if (
    start > end &&
    start >= 0 &&
    start % 1 === 0 &&
    end % 1 === 0 &&
    typeof start === "number" &&
    typeof end === "number"
  ) {
    for (let i = start; i >= end; i--) {
      sum += i;
    }
  } else {
    return "ERROR";
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
