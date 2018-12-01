function stringify(keyValuePairs) {
  let string = '';
  for (const [key, value] of keyValuePairs) {
    string += key + '=' + value + ',';
  }
  return string.substring(0, string.length - 1);
}

module.exports = stringify;
