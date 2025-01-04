const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

function getLetterPosition(letter) {
  if (letter >= 'a' && letter <= 'z') {
    return letter.charCodeAt(0) - 'a'.charCodeAt(0);
  } else {
    return -1;
  }
}

function getLetter(number, count) {
  const newNumber = (number + count + 26) % 26;
  return String.fromCharCode(newNumber + 'a'.charCodeAt(0));
}


class VigenereCipheringMachine {
  constructor(params = true) {
    this.params = params;
  }
  encrypt(str, crypt) {
    if (!str || !crypt) {throw new Error('Incorrect arguments!')}
    let result = '';
  let cryptIndex = 1;
  for (let i = 1; i <= str.length; i++) {
    let cryptCount = (cryptIndex - 1) % crypt.length + 1;
    if (str[i-1].toLowerCase() >= 'a' && str[i-1].toLowerCase() <= 'z') {
      cryptIndex++
      crypt[cryptIndex]
      result += getLetter(getLetterPosition(str[i-1].toLowerCase()), getLetterPosition(crypt[cryptCount-1].toLowerCase()))
    } else {
      result += str[i-1]
    }
  }
  if (this.params) {
    return result.toUpperCase()
  } else {
    return result.toUpperCase().split('').reverse().join('')
  }
  }
  decrypt(str, crypt) {
    if (!str || !crypt) {throw new Error('Incorrect arguments!')}
    let result = '';
  let cryptIndex = 1;

  for (let i = 1; i <= str.length; i++) {
    let cryptCount = (cryptIndex - 1) % crypt.length + 1;
    if (str[i - 1].toLowerCase() >= 'a' && str[i - 1].toLowerCase() <= 'z') {
      cryptIndex++;
      const decryptedChar = getLetter(getLetterPosition(str[i - 1].toLowerCase()), -(getLetterPosition(crypt[cryptCount - 1].toLowerCase())));
      result += decryptedChar;
      console.log()
    } else {
      result += str[i - 1];
    }
  }
  if (this.params) {
    return result.toUpperCase()
  } else {
    return result.toUpperCase().split('').reverse().join('')
  }
  }
}

module.exports = {
  VigenereCipheringMachine
};
