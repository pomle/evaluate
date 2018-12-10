function findNode(tree, text) {
  for (const child of tree.nodes) {
    if (child.text === text) {
      return child;
    } else if (child.nodes) {
      return findNode(child, text);
    }
  }
}

module.exports = findNode;
