describe('No side effect in constructor', () => {
  describe('good solution', () => {
    const createPerson = require('./good');
    it('returns a new Person with given id', () => {
      const person = createPerson(124142, 'John Doe');
      expect(person.id).toEqual(124142);
      expect(person.name).toEqual('John Doe');
    });
  });

  describe('bad solution', () => {
    const createPerson = require('./bad');
    it('returns a new Person with auto id', () => {
      const person = createPerson('John Doe');
      expect(person.id).toEqual(1);
      expect(person.name).toEqual('John Doe');
    });
  });
});
