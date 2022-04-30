const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight (arr) {
  let temp = arr.slice();
  
  temp = temp.map ((a, index) => {
      if (a == -1) return index;
      else return '';
  }); 
 
  temp = temp.filter(a => typeof (a) == 'number');
 
  arr = arr.filter(a => a != -1);
  arr.sort((a, b) => a - b);
 
  temp.forEach (a => {
     arr.splice(a, 0 , -1);
  })  
  return arr;
}

module.exports = {
  sortByHeight
};
