const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(url) {
    let res = {};
    let arr = []; 
    let temp;

    url = url.map(item => {
        arr = item.split('.');
        arr = arr.map ((a, index) => {
            temp = a;
            for (let i=index; i< arr.length-1; i++) {
                temp = `${ arr[i+1] }.${ temp }`;      
            }
            temp = `.${ temp }`;
            return temp;
        });
        return arr;
    });

    url = url.reduce((sum, current) => {
      return sum.concat(current);
    }, []);

    url.sort((a,b) => a.length - b.length);

    url.forEach(item => {
        res[item] = (res[item]+1) || 1; 
    })
    return res;
}

module.exports = {
  getDNSStats
};
