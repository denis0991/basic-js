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
function getDNSStats(domains) {
  let obj = {};
  const newArr = domains.map((elem) => {
    return elem.split('.').reverse().join('.');
  }
  )
  newArr.forEach((elem) => {
   let arr = elem.split('.');
    for (let item of arr) {
      if (obj[item]) {
        obj[item]++
      } else {
        obj[item] = 1;
      }
    }
  })
 let objKeys = Object.keys(obj);
 let resultString = '';
 let resultObj = {};
 objKeys.forEach(elem => {
  resultString += '.' + elem
  resultObj[resultString] = obj[elem]
  console.log(resultObj)
 })
  return resultObj;
}

module.exports = {
  getDNSStats
};
