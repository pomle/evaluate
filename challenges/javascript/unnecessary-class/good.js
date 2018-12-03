function extractProperty(key) {
  return function extract(object) {
    return object[key];
  };
}

module.exports = extractProperty;
