describe('No param reassign', () => {
  function createTest(fn) {
    it('returns a transformed string', () => {
      expect(fn('HOOOLAA BANDOOOLA')).toEqual(
        'hooolaa ba'
      );
    });
  }

  ['good', 'bad'].forEach(source => {
    const fn = require('./' + source);
    describe(`${source} solution`, () =>
      createTest(fn));
  });
});
