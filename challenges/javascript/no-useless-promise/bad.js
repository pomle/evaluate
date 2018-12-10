function performUserSearch(api, user, query) {
  return new Promise(resolve => {
    const searchString = `user:${
      user.id
    },query:${query}`;
    api.search(searchString).then(result => {
      resolve({
        resultFor: searchString,
        result,
      });
    });
  });
}

module.exports = performUserSearch;
