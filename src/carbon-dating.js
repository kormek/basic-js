const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if(arguments.length===0 || isNaN(Number(sampleActivity)) || typeof(sampleActivity) == "number" || Number(sampleActivity)===0 || typeof(sampleActivity)=== "object" || Number(sampleActivity)<=0 ||Number(sampleActivity)>15){
    return false;
  }
  sampleActivity = parseInt(sampleActivity);
  
  let k=0.693/5730;


  return Math.ceil(Math.log10(15/sampleActivity)/k);

};
