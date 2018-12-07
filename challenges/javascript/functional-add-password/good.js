const createPassword = require('./password');

function addPassword(person) {
  return Object.assign({}, person, {
    password: createPassword(),
  });
}

module.exports = addPassword;
