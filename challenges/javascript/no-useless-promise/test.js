describe('No useless Promise', () => {
  const fakeAPI = {
    search() {
      return Promise.resolve({
        matches: [1, 4, 2],
      });
    },
  };

  const fakeUser = {
    id: 5125552,
  };

  function createTest(performUserSearch) {
    it('returns search result based on categories from API', () => {
      return expect(
        performUserSearch(
          fakeAPI,
          fakeUser,
          'michael jackson'
        )
      ).resolves.toEqual({
        result: { matches: [1, 4, 2] },
        resultFor:
          'user:5125552,query:michael jackson',
      });
    });
  }

  ['good', 'bad'].forEach(source => {
    const fn = require('./' + source);
    describe(`${source} solution`, () =>
      createTest(fn));
  });
});
