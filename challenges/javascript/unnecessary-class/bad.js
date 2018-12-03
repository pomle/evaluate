class PropExtractor {
  constructor(key) {
    this.key = key;
  }

  extract(object) {
    return object[this.key];
  }
}

module.exports = PropExtractor;
