function fetchResults(api, jobs) {
  const results = [];
  for (const job of jobs) {
    results.push(api.fetchJobResult(job));
  }
  return Promise.all(results);
}

module.exports = fetchResults;
