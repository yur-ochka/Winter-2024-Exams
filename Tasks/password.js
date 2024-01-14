// Generate random password
'use strict';
const generatePassword = (alphabet, length) => {
  let password = '';
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * alphabet.length);
    password = password + alphabet[index];
  }
  return password;
};

module.exports = generatePassword;
