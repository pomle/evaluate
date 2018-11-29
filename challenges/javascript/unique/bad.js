function uniqify(numbers) {
  const unique = [];
  for (const number of numbers) {
    if (!unique.includes(number)) {
      unique.push(number);
    }
  }
  return unique;
}

module.exports = uniqify;
