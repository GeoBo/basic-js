const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let result = email.match(/[a-zA-Z\-]+[@]([a-zA-Z0-9\-]+[.][a-zA-Z]+)/);
  if (!result || result.length < 2) return false;
  
  return result[1]; 
}

module.exports = {
  getEmailDomain
};
