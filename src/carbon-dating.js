const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(t) {
    const CARBON_14 = 5730; 
    const k = Math.log (2) /CARBON_14;
    let res;
    if (t < 0 || !(+t) || typeof (t) != 'string') return false;
    res = Math.ceil (Math.log (15/t) /k);
    if (res < 0) return false;
    //return [res, t];
    return res;
}

module.exports = {
  dateSample
};
