const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(team) {

  let res;
  if(!(team instanceof Array)) return false;
  res = team.filter(item => typeof(item) == "string")
            .map(item => item.trim().toUpperCase())
            .sort()
            .map(item => item[0])
            .join('');
  //return team.join(',');
  return res;
}

module.exports = {
  createDreamTeam
};
