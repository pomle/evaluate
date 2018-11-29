describe('Parallell promises', () => {
  const fakeAPI = {
    getFoo() {
      return Promise.resolve('foo-text');
    },
    getBar() {
      return Promise.resolve('bar-text');
    },
  };

  function createTest(fn) {
    it('returns object composed of two API responses', () => {
      return expect(fn(fakeAPI)).resolves.toEqual({
        bar: 'bar-text',
        foo: 'foo-text',
      });
    });
  }

  ['good', 'bad'].forEach(source => {
    const fn = require('./' + source);
    describe(`${source} solution`, () => createTest(fn));
  });
});
