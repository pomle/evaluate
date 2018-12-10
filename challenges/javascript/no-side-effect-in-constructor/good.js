class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

function createPerson(id, name) {
  return new Person(id, name);
}

module.exports = createPerson;
