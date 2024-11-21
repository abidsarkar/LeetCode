// https://leetcode.com/problems/counter/description/?envType=study-plan-v2&envId=30-days-of-javascript
// description: we also need to retrn the value as a function not static value. 
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count = n;

    return function() {
        console.log(count);
      return count++;
    };
};

const counter = createCounter(10)
counter(); // 10
counter(); // 11
counter(); // 12
