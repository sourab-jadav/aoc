const input=require('./input.js')

// bruteforce way

let floor=0;
let result=0;
for(let i=0;i<input.length;i++){
    if(input[i]==='('){
        floor++;
    }else{
        floor--;
    }
        if(floor===-1){
            result=i+1;
            break;
        }
}

console.log(result)
