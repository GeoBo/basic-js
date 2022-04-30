const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    let arrCopy; 
    if(!(arr instanceof Array)) throw new Error("'arr' parameter must be an instance of the Array!") ;
    arrCopy = arr.slice();
    for (let i=0; i< arrCopy.length; i++) {
      switch (arrCopy[i]) {
          case '--discard-next': 
              if (i == arrCopy.length -1) arrCopy.splice(i, 1);
              else {
                  arrCopy.splice(i,2);
                  if(arrCopy[i] == '--double-prev' || arrCopy[i] == '--discard-prev') arrCopy.splice(i, 1);
              }
          break;
          case '--discard-prev': 
              if (i == 0 ) arrCopy.splice(i, 1);
              else arrCopy.splice(i-1,2);
          break;
          case '--double-next': 
              if (i == arrCopy.length -1) arrCopy.splice(i, 1);
              else arrCopy[i] = arrCopy[i+1];
          break;
          case '--double-prev': 
              if (i == 0) arrCopy.splice(i, 1);
              else arrCopy[i] = arrCopy[i-1];
          break;
      } 
    }
    return arrCopy;
}

module.exports = {
  transform
};
