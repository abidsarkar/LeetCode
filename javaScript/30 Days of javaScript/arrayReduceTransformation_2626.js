// https://leetcode.com/problems/array-reduce-transformation/?envType=study-plan-v2&envId=30-days-of-javascript

// mainly in leetcode the fn function alredy created. we just need to pass value in it 
// so we dot use the built in reduce else we just pass the necesuarry value in the fn function 
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let size = nums.length;
    let val = init;
    if(size === 0){
        return init;
    }
    else{
        for (let i = 0; i < size; i++) 
        {
        val = fn(val, nums[i]);
        }
        return val;
    }
};