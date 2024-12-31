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
function repeater(str, options) {
  let additionStr = '';
  let result = '';

    for (let i = 0; i < (options.additionRepeatTimes || 1); i++) {
      if ('addition' in options) {
        if (i < options.additionRepeatTimes - 1) {
          additionStr += (String(options.addition)) + (options.additionSeparator || '|')

        } else {
          additionStr += (String(options.addition));
        }
      } else {
        additionStr = '';
      }
    }

    for (let i = 0; i < (options.repeatTimes || 1); i++) {
      if (i < options.repeatTimes - 1) {
        result += str + additionStr + (options.separator || '+')
      } else {
        result += str + additionStr;

      }
    }
  return result;
}


module.exports = {
  repeater
};
