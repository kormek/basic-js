const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let answer = 0;
  for(let i = 0;i<matrix.length;i++){
    for(let j = 0;i<matrix[i].length;j++){
      if(matrix[i][j]=="^^") answer++;
    }
  }
  return answer;
};
