function wrapItems(items) {
  const envelopes = [];
  let counter = 0;
  for (const item of items) {
    const envelope = {
      id: counter++,
      item,
    };
    envelopes.push(envelope);
  }
  return envelopes;
}

module.exports = wrapItems;
