const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str,arr = { repeatTimes: 1, separator: '+', addition: '', additionRepeatTimes: 0, additionSeparator: '|' }) {
  let repeatTimes = arr.repeatTimes == undefined?1:arr.repeatTimes;
  let separator = arr.separator+"" == "undefined"?'+':arr.separator;
  let addition = arr.addition+"" == "undefined"?'':arr.addition;
  let additionRepeatTimes = arr.additionRepeatTimes == undefined?1:arr.additionRepeatTimes;
  let additionSeparator = arr.additionSeparator == undefined?'':arr.additionSeparator;
  console.log(repeatTimes,separator,addition,additionRepeatTimes,additionSeparator);
  let answer = "";
  console.log(repeatTimes)
  for(let i = 0;i<repeatTimes ;i++){
    answer+=str;
      for(let j = 0;j<additionRepeatTimes;j++){
        answer+=addition;
        j == additionRepeatTimes - 1?answer:answer+=additionSeparator;
        
      }
      i == repeatTimes - 1?answer:answer+=separator;
      //answer+=separator;
  }
 return answer;
};
  