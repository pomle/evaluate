describe('Default param first', () => {
  describe('good solution', () => {
    const createPerson = require('./good');

    it('has required argument first', () => {
      const person = createPerson('8306085442');
      expect(person).toEqual({
        id: '8306085442',
        name: 'Jane Doe',
      });
    });
  });

  describe('bad solution', () => {
    const createPerson = require('./bad');

    it('has required argument last', () => {
      const person = createPerson(
        undefined,
        '8306085442'
      );
      expect(person).toEqual({
        id: '8306085442',
        name: 'Jane Doe',
      });
    });
  });
});
