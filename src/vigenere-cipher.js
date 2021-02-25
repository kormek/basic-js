const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  flag = true;
  myarr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  constructor(flag = true){
    this.flag = flag;
  }
  encrypt(message,key) {
    if(arguments.length<2 || message == undefined || key == undefined) throw new Error();
    let encryptword = [];
    let k = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();
    //key = key.split('');
    //message = message.split('');
    if(message.length > key.length){
      while(message.length> key.length){
        key+=key;
      }
      key = key.split('');
      message = message.split('');
      while(message.length < key.length){
        key.pop();
      }
    }
    
    for(let i = 0;i<message.length;i++){
      if(this.myarr.indexOf(message[i]) == -1) {
        encryptword.push(message[i])
      } else {
        let index = this.myarr.indexOf(message[i])+ this.myarr.indexOf(key[k]);
        k+=1;
        while(index>=this.myarr.length){
          index-=this.myarr.length;
        }
        encryptword.push(this.myarr[index]);
      }
    }
    if(!this.flag){
      encryptword.reverse();
    } 
    return encryptword.join('');
  }    
  decrypt(message,key) {
    if(arguments.length<2 || message == undefined || key == undefined) throw new Error();
 // myarr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
   let answer = [];
   let copyofmyarr = [];
   let keycount = 0;
  
   
   message = message.toUpperCase();
   key = key.toUpperCase();
   if(message.length > key.length){
      while(message.length> key.length){
        key+=key;
      }
      key = key.split('');
      message = message.split('');
      while(message.length < key.length){
        key.pop();
      }
    }
    for(let i = 0;i<message.length;i++){
      if(this.myarr.indexOf(message[i]) != -1){
        copyofmyarr = [];
    for(let i = 0;i<this.myarr.length;i++){
     copyofmyarr.push(this.myarr[i]);
   }
    for(let j = 0;j<this.myarr.indexOf(key[keycount]);j++){
      copyofmyarr.push(copyofmyarr.shift());
    }
    keycount++;
    answer.push(this.myarr[copyofmyarr.indexOf(message[i])]);
    } else {
      answer.push(message[i]);
    }
  }
  if(!this.flag) answer.reverse();
  return answer.join('');
  }
}

module.exports = VigenereCipheringMachine;
