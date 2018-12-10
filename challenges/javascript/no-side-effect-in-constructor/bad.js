let id = 0;

class Person {
  constructor(name) {
    this.id = ++id;
    this.name = name;
  }
}

function createPerson(name) {
  return new Person(name);
}

module.exports = createPerson;
