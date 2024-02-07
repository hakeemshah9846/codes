const bcrypt = require("bcrypt");
const setPassword = require("../utils/userEmail-template/setPassword");
//generate random password
function generateRndomPassword(length) {
  let charset = "abhbbuhuhuhjIIKKKIOBNMOPRTYYS1234589@#";
  let password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  return password;
}

module.exports = generateRndomPassword;
