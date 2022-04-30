const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles (arr) {
    let repeat = {};
    let newName;
    return arr.map((a) => {    
      if (repeat[a] == undefined) {
          repeat[a] = 0;
          return a;
      }
      else {
          repeat[a]++;
          newName = `${a}(${repeat[a]})`;
          repeat[newName] = 0;
          return newName;
      }   
    });
}

module.exports = {
  renameFiles
};
