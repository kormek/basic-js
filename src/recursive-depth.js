const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
 
  calculateDepth(arr,d=0,recdepth=0) {
    
    if(arr.length == 0) return 1;
    for(let i of arr){
      if(Array.isArray(i)) d = this.calculateDepth(i);
      if(d>recdepth) recdepth = d;
    }
    return recdepth+1;
   
  }
};