const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine (str) {
  let count =0; 
  let res = '';

  for (let i=0; i< str.length; i++) {
      if (str[i] != str[i+1] || i == str.length -1) {
          if (count) res += count +1; 
          count = 0; 
          res += str[i];       
      }
      else count++; 
  }
  return res;
}

module.exports = {
  encodeLine
};
