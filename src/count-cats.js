const CustomError = require("../extensions/custom-error");

module.exports = function countCats(tmp) {
  let counter = 0;
  for(let i = 0; i<tmp.length; i++){
    for(let j = 0; j<tmp[0].length; j++){
      if (tmp[i][j] == "^^") counter++;
    }
  }
  return counter;
};
