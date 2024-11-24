// https://leetcode.com/problems/function-composition/?envType=study-plan-v2&envId=30-days-of-javascript
//function under function we just need to output the value and sum of the value and return the total 

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    const rev = functions.reverse();
    let total = x;
    rev.forEach((fn) => {
        total = fn(total);
        // console.log(total);
    });
    return total;
  };
};

// const fn = compose([(x) => x + 1, (x) => 2 * x]);
const fn = compose([x => x + 1, x => x * x, x => 2 * x]);
fn(4); // 9
