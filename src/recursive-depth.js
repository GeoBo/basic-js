const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth (arr) {
      let temp = arr.filter(a => Array.isArray(a))
      if (temp.length > 0) { 
          temp = temp.reduce((sum, current) => sum.concat(current), []);
          return 1 + this.calculateDepth(temp);
      }
      else return 1;
  }
}

module.exports = {
  DepthCalculator
};
