function transformText(text) {
  let transformed = text.toLowerCase();
  transformed = transformed.substring(0, 10);
  return transformed;
}

module.exports = transformText;
