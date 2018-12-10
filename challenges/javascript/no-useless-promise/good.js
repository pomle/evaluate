function performUserSearch(api, user, text) {
  const query = `user:${user.id},query:${text}`;
  return api.search(query).then(result => {
    return {
      resultFor: query,
      result,
    };
  });
}

module.exports = performUserSearch;
