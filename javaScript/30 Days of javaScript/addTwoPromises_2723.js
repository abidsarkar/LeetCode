// https://leetcode.com/problems/add-two-promises/description/?envType=study-plan-v2&envId=30-days-of-javascript
// call the promise using await promise.all and store it in array and return the array with sum them
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */

var addTwoPromises = async function(promise1, promise2) {
  const [value1, value2] = await Promise.all([promise1, promise2]);
  return value1 + value2;
    
    
};


  addTwoPromises(Promise.resolve(3), Promise.resolve(2)).then(console.log); // 4
 