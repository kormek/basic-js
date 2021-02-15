const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(members == undefined || members == null || arguments.length == 0 || members.length <= 1  ) return false;
  let answer =[];
  for(i in members){
    if(typeof(members[i]) == "string"){
      answer.push(members[i].split('').filter(letter => letter !=' ')[0]);
    }
  }
  if(answer.length <= 1) return false;
  answer = answer.join('').toUpperCase();
  answer = answer.split('');
  answer.sort();
  return answer.join('');
};
