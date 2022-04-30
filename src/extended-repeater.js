const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater (str, option) {
  if (!option || !Object.keys(option).length) return false;
  let mainArr = [];
  let mainStr = str;
  let adArr = [];
  let adStr;
  let separator = option.separator || '+';
  let adSeparator = option.additionSeparator || '|';
  // if (typeof option.addition == "boolean") option.addition = option.addition.toString();
  if (typeof option.addition == "boolean" || option.addition === null) option.addition = option.addition + '';

  
  if (option.addition) {
    if (option.additionRepeatTimes > 1) {
        adArr.length = option.additionRepeatTimes;
        adArr.fill(option.addition, 0, adArr.length);
        adStr = adArr.join(adSeparator);
        mainStr += adStr;
    }
    else mainStr += option.addition;
  }
  if (option.repeatTimes > 0) {
      mainArr.length = option.repeatTimes;
      mainArr.fill(mainStr, 0, mainArr.length);
      mainStr = mainArr.join(separator);
  }
  
  return mainStr;
}

module.exports = {
  repeater
};
