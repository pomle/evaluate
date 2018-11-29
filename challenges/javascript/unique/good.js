function uniqify(numbers) {
  const unique = [];
  const mem = Object.create(null);
  for (const number of numbers) {
    if (!mem[number]) {
      unique.push(number);
      mem[number] = true;
    }
  }
  return unique;
}

module.exports = uniqify;
