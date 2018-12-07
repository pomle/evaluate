describe('Unnecessary array map', () => {
  function createTest(runUpdate) {
    it('runs update function on all objects in array', () => {
      const entities = [
        {
          update: jest.fn(),
        },
        {
          update: jest.fn(),
        },
      ];
      runUpdate(entities);
      entities.forEach(entity => {
        expect(entity.update).toHaveBeenCalledTimes(1);
      });
    });
  }

  ['good', 'bad'].forEach(source => {
    const fn = require('./' + source);
    describe(`${source} solution`, () => createTest(fn));
  });
});
