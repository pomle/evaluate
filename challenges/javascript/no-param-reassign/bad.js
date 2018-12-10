function transformText(text) {
  text = text.toLowerCase();
  text = text.substring(0, 10);
  return text;
}

module.exports = transformText;
