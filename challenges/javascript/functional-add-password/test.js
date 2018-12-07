describe('Functional addPassword', () => {
  describe('good solution', () => {
    const addPassword = require('./good');
    it('returns a new object with password added', () => {
      const sourcePerson = {
        name: 'Lombard',
      };
      const resultPerson = addPassword(sourcePerson);
      expect(resultPerson).toEqual({
        name: 'Lombard',
        password: 'fake-random-password',
      });
      expect(resultPerson).not.toBe(sourcePerson);
    });
  });

  describe('bad solution', () => {
    const addPassword = require('./bad');
    it('mutates object with password added', () => {
      const person = {
        name: 'Lombard',
      };
      addPassword(person);
      expect(person).toEqual({
        name: 'Lombard',
        password: 'fake-random-password',
      });
    });
  });
});
