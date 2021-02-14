const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let answer = 0;
  if(arguments.length == 0 || matrix.length == 0) return 0;
  for(let i = 0;i<matrix.length;i++){
    for(let j = 0;i<matrix[i].length;j++){
      if(matrix[i][j]=="^^") answer++;
    }
  }
  return answer;
};
