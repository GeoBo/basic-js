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
 class VigenereCipheringMachine {
  constructor (direct = true) { 
      this.direct = direct;
  }
  encrypt (message, key) {
              let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase();
              let index;
              let res = '';
              if (!message || !key) throw new Error ('Incorrect arguments!');
              for (let i=0, j=0; i< message.length; i++, j++) {
                  if (alphabet.indexOf(message[i].toLowerCase()) == -1) { 
                     res += message[i];
                     j--;
                     continue;
                  }
                  if (j == key.length) j = 0; 
                  index = (alphabet.indexOf(message[i].toLowerCase()) + alphabet.indexOf(key[j].toLowerCase())) % 26;
                  res += alphabet[index];
              }
              
              if (!this.direct) {
                  res = res.split('').reverse().join('');
              }
              return res.toUpperCase();
      }

      decrypt (message, key) {
          let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase();
          let index;
          let res = '';
          if (!message || !key) throw new Error ('Incorrect arguments!');
          message = message.toLowerCase();
    
          for (let i=0, j=0; i< message.length; i++, j++) {
                  if (alphabet.indexOf(message[i].toLowerCase()) == -1) { 
                     res += message[i];
                     j--;
                     continue;
                  }
                  if (j == key.length) j = 0; 
                  
                  index = (alphabet.indexOf(message[i].toLowerCase()) +26 - alphabet.indexOf(key[j].toLowerCase())) % 26;
                  res += alphabet[index];
                }
              
              if (!this.direct) {
                  res = res.split('').reverse().join('');
              }
              return res.toUpperCase();
      }         
}

module.exports = {
  VigenereCipheringMachine
};
