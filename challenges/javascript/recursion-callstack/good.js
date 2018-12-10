function findNode(tree, text) {
  const nodes = [...tree.nodes];
  while (nodes.length) {
    const child = nodes.shift();
    if (child.text === text) {
      return child;
    } else if (child.nodes) {
      nodes.push(...child.nodes);
    }
  }
}

module.exports = findNode;
