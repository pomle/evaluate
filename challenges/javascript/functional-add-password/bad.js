const createPassword = require('./password');

function addPassword(person) {
  person.password = createPassword();
  return person;
}

module.exports = addPassword;
