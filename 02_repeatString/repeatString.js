const repeatString = function (string, num) {
  let resultString = "";
  for (let i = 1; i <= num; i++) {
    if (num) {
      resultString += string;
    } else {
      break;
    }
  }
  if (num < 0) {
    resultString += "ERROR";
  }
  return resultString;
};

// Do not edit below this line
module.exports = repeatString;
