const repeatString = function (string, n) {
  let resultString = '';
  for (let i = 1; i <= n; i++) {
    if (string) {
      resultString += string;
    } else {
      return "Error";
    }
  }
  return resultString;
};

// Do not edit below this line
module.exports = repeatString;
