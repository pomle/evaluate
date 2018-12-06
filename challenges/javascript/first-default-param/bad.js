function createPerson(name = 'Jane Doe', id) {
  return {
    id,
    name,
  };
}

module.exports = createPerson;
