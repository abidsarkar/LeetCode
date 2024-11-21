// https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript
//function under a function and return the error

/**
 * @param {string} val
 * @return {Object}
 */
// var expect = function(val) {
//    function toBe(val2) {
//         if(val ===  val2){
//             return true;
//         }else{
//             throw new Error('Not Equal');
//         }
//     }
//     function notToBe(val3) {
//         if(val !== val3){
//             return true;
//         }
//         else{
//         throw new Error('Equal')
//         }
//     }
//     return {
//         toBe,
//         notToBe
//     }
// };

let expect = function(val1){
    return{
        toBe: (val2) =>{
            if(val1 === val2){
                return true;
            }else{
                throw new Error("Not Equal");
            }
        },
        notToBe: (val2) =>{
            if(val1 === val2){
                throw new Error("Equal");
            }
            else{
                return true;
            }
        }
    }
}
console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(6));// throws "Equal"

 