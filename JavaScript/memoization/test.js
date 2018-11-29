

describe('Fibonacci', () => {
    function createTest(fn) {
        [0, 1, 1, 2,3,5,8,13,21,34,55,89,144].forEach((result, index) => {
            it(`calculated fibonacci of ${index} to ${result}` , () => {
                expect(fn(index)).toBe(result);
            });
        });
    }

    [
        'good',
        'bad',
    ].forEach(source => {
        const fn = require('./' + source);
        describe(`${source} solution`, () => createTest(fn));
    });
});
