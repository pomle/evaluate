describe('Unecessary Class', () => {
  describe('good solution', () => {
    const createPropExtractor = require('./good');
    it('creates a function that extracts a prop', () => {
      const extract = createPropExtractor('name');
      const names = [
        { name: 'Bob' },
        { name: 'Claus' },
      ].map(extract);
      expect(names).toEqual(['Bob', 'Claus']);
    });
  });

  describe('bad solution', () => {
    const PropExtractor = require('./bad');
    it('provides a class that can be used to extract a property', () => {
      const extractor = new PropExtractor('name');
      const names = [
        { name: 'Bob' },
        { name: 'Claus' },
      ].map(object => extractor.extract(object));
      expect(names).toEqual(['Bob', 'Claus']);
    });
  });
});
