function stringify(keyValuePairs) {
  const strings = [];
  for (const [key, value] of keyValuePairs) {
    strings.push(key + '=' + value);
  }
  return strings.join(',');
}

module.exports = stringify;
