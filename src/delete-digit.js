const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit (a) {
    let digits = a.toString().split('');
    let temp;
    let res = []; 

    digits.forEach((i,index) => {
        temp = digits.slice();
        temp.splice(index,1);
        res.push (temp.join(''));
    })
    
    return Math.max(...res);
}

module.exports = {
  deleteDigit
};
