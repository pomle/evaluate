function performUserSearch(api, user, query) {
  const searchString = `user:${
    user.id
  },query:${query}`;
  return api.search(searchString).then(result => {
    return {
      resultFor: searchString,
      result,
    };
  });
}

module.exports = performUserSearch;
