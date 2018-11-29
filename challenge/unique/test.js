describe('Uniqify', () => {
  function createTest(uniqify) {
    it('returns new array containing only unique items', () => {
      const dupes = [1, 0, 3, 2, 1, 1, 3, 2, 1, 3, 3];
      expect(uniqify(dupes)).toEqual([1, 0, 3, 2]);
    });
  }

  ['good', 'bad'].forEach(source => {
    const fn = require('./' + source);
    describe(`${source} solution`, () => createTest(fn));
  });
});
