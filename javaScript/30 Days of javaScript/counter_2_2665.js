//https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript
//--abc or ++abc is return what you want but abc++ or abc-- is not 
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
let createCounter = function (val){
    let abc = val;
    return{
        increment: () =>{
            return ++abc;
        },
        reset: () =>{
            return val;
        },
        decrement: () =>{
            return --abc;
        }


    }
}

const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement() ); //4
