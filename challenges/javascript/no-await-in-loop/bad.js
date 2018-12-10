async function fetchResults(api, jobs) {
  const results = [];
  for (const job of jobs) {
    results.push(await api.fetchJobResult(job));
  }
  return results;
}

module.exports = fetchResults;
