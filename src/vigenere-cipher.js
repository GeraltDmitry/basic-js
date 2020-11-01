const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(typeOfMachine) {
    this.typeOfMachine = typeOfMachine;
  }

  encrypt(massage, key) {
    let spaceIndex = 0;
    let result = '';
    let a = '';
    massage = massage.toLowerCase();
    key = key.toLowerCase();

    for (i = 0; i < massage.length; i++) {
      if (/[a-z]/.test(massage[i]) === true) {
        a = String.fromCharCode((massage[i].charCodeAt() - 97 + key[(i - spaceIndex) % key.length].charCodeAt() - 97) % 26 + 97);
        result = `${result}${a}`
      } else {
        result = `${result}${massage[i]}`;
        spaceIndex++;
      }
    }

    if (this.typeOfMachine === false) {
      return result.split('').reverse().join('').toUpperCase();
    } else {
      return result.toUpperCase();
    }
  }   

    decrypt(encryptedMessage, key) {
      if (!encryptedMessage || !key) {
        throw new Error('Not enough arguments.');
      }

      const ASCII_CODE_A = 65;
      const LATIN_LETTER_COUNT = 26;

      let result = '';
      let offset = 0;

      for (let i = 0; i < encryptedMessage.length; i++) {
        const char = encryptedMessage[i];
        const charCode = char.toUpperCase().charCodeAt(0) - ASCII_CODE_A;

        if (charCode < 0 || charCode > LATIN_LETTER_COUNT) {
          result += char;
          offset++;
          continue;
        }

        const keyIndex = (i - offset) % key.length;
        const keyCharCode = key[keyIndex].toUpperCase().charCodeAt(0) - ASCII_CODE_A;
        let newCharCode;
        if (charCode - keyCharCode >= 0) {
          newCharCode = (charCode - keyCharCode) % LATIN_LETTER_COUNT + ASCII_CODE_A;
        } else {
          newCharCode = LATIN_LETTER_COUNT + charCode - keyCharCode + ASCII_CODE_A;
        }

        result += String.fromCharCode(newCharCode);
      }

      result = this.isReverse ? result.split('').reverse().join('') : result;
      return result;
  }
}

module.exports = VigenereCipheringMachine;
