function increment(numbers) {
  let results = [];
  for (let number of numbers) {
    results.push(number + 1);
  }
  return results;
}

module.exports = increment;
