// https://leetcode.com/problems/allow-one-function-call/?envType=study-plan-v2&envId=30-days-of-javascript

// pass the hole Array into fn() by ..Array

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let count = 0;
    return function(...args){
        ++count;
        // console.log(count);
        if(count===1){
            
            return fn(...args);
            // console.log(fn(args[0],args[1],args[2]));
        }
        else{
            return undefined;
        }
        
        
    }
};


 let fn = (a,b,c) => (a + b + c)
 let onceFn = once(fn)
//  onceFn(1,2,3)
//  onceFn(1,2,3)
 console.log(onceFn(1,2,3));// 6
 console.log(onceFn(2,3,6)); // returns undefined without calling fn
  
 
 
