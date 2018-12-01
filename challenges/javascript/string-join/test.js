describe('String Join', () => {
  function createTest(stringify) {
    it('creates string from key/value pairs', () => {
      const pairs = [['name', 'John'], ['age', 13]];
      expect(stringify(pairs)).toEqual('name=John,age=13');
    });
  }

  ['good', 'bad'].forEach(source => {
    const fn = require('./' + source);
    describe(`${source} solution`, () => createTest(fn));
  });
});
