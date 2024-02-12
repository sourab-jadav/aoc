const input=require('./input.js')


let floor=0;
// brute force
// for(let i=0;i<input.length;i++){
//     if(input[i]==='('){
//         floor++;
//     }else{
//         floor--;
//     }
// }
// console.log(`Part 1: ${floor}`)

// using js
// let final_floor=input.reduce((acc,curr)=>{
//     if(curr==='('){
//         return acc+1;
//     }else{
//         return acc-1;
//     }
// },0)

// using both map and reduce
// let final_floor=input
//     .map((val)=>{
//         if(val==='('){
//             return 1;
//         }else{
//             return -1;
//         }
//     }).reduce((acc,curr)=>{
//         return acc+curr;
//     },0)


// this is the fastet way
// let final_floor=input
//     .map(v=>v==='('?1:-1)
//     .reduce((acc,curr)=>acc+curr,0)


console.log(`Part 1: ${final_floor}`)
