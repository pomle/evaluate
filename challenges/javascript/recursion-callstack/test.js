describe('Recursion Callstack', () => {
  class Node {
    constructor(text, nodes) {
      this.text = text;
      this.nodes = nodes;
    }
  }

  const tree = new Node('a', [
    new Node('aa', [
      new Node('aaa'),
      new Node('aab'),
      new Node('aac'),
    ]),
    new Node('ab', [
      new Node('aba'),
      new Node('abb'),
      new Node('abc'),
    ]),
  ]);

  function createTest(findNode) {
    it('returns node that contains text', () => {
      return expect(findNode(tree, 'aab')).toBe(
        tree.nodes[0].nodes[1]
      );
    });
  }

  ['good', 'bad'].forEach(source => {
    const fn = require('./' + source);
    describe(`${source} solution`, () =>
      createTest(fn));
  });
});
