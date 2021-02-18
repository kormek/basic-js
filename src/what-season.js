const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  if(arguments.length == 0) return 'Unable to determine the time of year!';
  if(typeof(date) != "object" || date.getDay.toString() != "function getDay() { [native code] }") throw new Error();
  //if(date.length != 7) throw new Error();
  if(date.getMonth() >=0 && date.getMonth() <= 1 || date.getMonth() == 11) return "winter";
  if(date.getMonth() >=2 && date.getMonth() <= 4) return "spring";
  if(date.getMonth() >=5 && date.getMonth() <= 7) return "summer";
  if(date.getMonth() >=8 && date.getMonth() <= 10) return "fall";

  return 'Unable to determine the time of year!';
};
