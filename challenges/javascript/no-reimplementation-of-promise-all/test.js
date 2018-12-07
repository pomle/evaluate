describe('Manuall Promise.all', () => {
  const fakeAPI = {
    getObject(id) {
      return Promise.resolve({ id });
    },
  };

  function createTest(getObjects) {
    it('returns each object for a list of ids', () => {
      return expect(
        getObjects(fakeAPI, [1, 2, 3])
      ).resolves.toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
    });
  }

  ['good', 'bad'].forEach(source => {
    const fn = require('./' + source);
    describe(`${source} solution`, () =>
      createTest(fn));
  });
});
