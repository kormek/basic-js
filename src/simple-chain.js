const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain:[],
  getLength() {
   return this.chain.length;
  },
  addLink(value) {
    if(arguments.length ==0) {this.chain.push(`( )`);}
    else {this.chain.push(`( ${(value)} )`);}
    return this;
  },
  removeLink(position) {
    if(!Number.isInteger(position) || position<1 || position>this.chain.length){
      this.chain = [];
       throw new Error();
     }
     this.chain.splice(position-1,1);
     return this;
  },
  reverseChain() {
   this.chain = this.chain.reverse();
   return this;
  },
  finishChain() {

    const en = this.chain.join('~~');
    this.chain = [];
    return en;
  }
};

module.exports = chainMaker;
