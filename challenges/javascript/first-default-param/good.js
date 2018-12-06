function createPerson(id, name = 'Jane Doe') {
  return {
    id,
    name,
  };
}

module.exports = createPerson;
