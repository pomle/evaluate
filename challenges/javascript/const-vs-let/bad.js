function wrapItems(items) {
  let envelopes = [];
  let counter = 0;
  for (let item of items) {
    let envelope = {
      id: counter++,
      item,
    };
    envelopes.push(envelope);
  }
  return envelopes;
}

module.exports = wrapItems;
