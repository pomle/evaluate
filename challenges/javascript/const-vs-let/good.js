function increment(numbers) {
  const results = [];
  for (const number of numbers) {
    results.push(number + 1);
  }
  return results;
}

module.exports = increment;
