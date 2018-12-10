describe('No await in loop', () => {
  const fakeAPI = {
    fetchJobResult(job) {
      return Promise.resolve({ result: job });
    },
  };

  function createTest(fn) {
    it('returns results of all jobs', () => {
      const jobs = [
        Symbol('job 1'),
        Symbol('job 2'),
        Symbol('job 3'),
      ];

      return expect(
        fn(fakeAPI, jobs)
      ).resolves.toEqual([
        { result: jobs[0] },
        { result: jobs[1] },
        { result: jobs[2] },
      ]);
    });
  }

  ['good', 'bad'].forEach(source => {
    const fn = require('./' + source);
    describe(`${source} solution`, () =>
      createTest(fn));
  });
});
