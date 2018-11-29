function createFibonacci() {
  const memo = new Map([[0, 0], [1, 1]]);

  return function fibonacci(n) {
    if (!memo.has(n)) {
      memo.set(n, fibonacci(n - 1) + fibonacci(n - 2));
    }
    return memo.get(n);
  };
}

module.exports = createFibonacci();
