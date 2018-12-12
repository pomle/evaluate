describe('const vs let', () => {
  function createTest(fn) {
    it('returns new array with all numbers incremented', () => {
      const numbers = [1, 2, 3, 4];
      expect(fn(numbers)).toEqual([2, 3, 4, 5]);
    });
  }

  ['good', 'bad'].forEach(source => {
    const fn = require('./' + source);
    describe(`${source} solution`, () =>
      createTest(fn));
  });
});
