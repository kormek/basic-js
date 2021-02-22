const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if(arguments.length == 0 || !Array.isArray(arr)) throw new Error();
    let answer = [];
    for(let i = 0;i<arr.length;i+=1){
        
        if(arr[i] == "--discard-next" && i<arr.length ){
                answer.push(undefined);
                i+=1;
                
        } else if(arr[i] == "--discard-prev" && i > 0 ){
            answer.pop();
        } else if(arr[i] == "--double-next" && i< arr.length ){
            answer.push(arr[i+1]);
        } else if(arr[i] == "--double-prev" && i>0 ){
            answer.push(answer[answer.length-1]);
        }
        else if(arr[i] != "--discard-next" && arr[i] != "--discard-prev" && arr[i] != "--double-next" && arr[i] != "--double-prev"){
            answer.push(arr[i]);
        }
    }
    answer = answer.filter(x => x != undefined);
    return answer;
};
