describe('const vs let', () => {
  function createTest(fn) {
    it('wraps all items in a numbered envelope', () => {
      const items = [
        {
          name: 'Bob',
        },
        {
          name: 'Carl',
        },
        {
          name: 'Julie',
        },
      ];
      expect(fn(items)).toEqual([
        { id: 0, item: { name: 'Bob' } },
        { id: 1, item: { name: 'Carl' } },
        { id: 2, item: { name: 'Julie' } },
      ]);
    });
  }

  ['good', 'bad'].forEach(source => {
    const fn = require('./' + source);
    describe(`${source} solution`, () => createTest(fn));
  });
});
