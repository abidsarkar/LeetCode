// https://leetcode.com/problems/memoize/?envType=study-plan-v2&envId=30-days-of-javascript
// we store ans in a array and find if befor call the function. finding using #in 

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cached = {};
    return function(...args) {
        let key = JSON.stringify(args);
        if(key in cached){
            return cached[key];
        }
        else{
           cached[key]  = fn(...args);
           return cached[key];
        }
    }
}



  let callCount = 0;
  const memoizedFn = memoize(function (a, b) {
 	 callCount += 1;
    return a + b;
 })
  memoizedFn(2, 3) // 5
  memoizedFn(2, 3) // 5
  console.log(callCount) // 1 
 