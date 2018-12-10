function performUserSearch(api, user, text) {
  return new Promise(resolve => {
    const query = `user:${user.id},query:${text}`;
    api.search(query).then(result => {
      resolve({
        resultFor: query,
        result,
      });
    });
  });
}

module.exports = performUserSearch;
