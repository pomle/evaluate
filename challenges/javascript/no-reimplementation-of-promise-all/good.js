function getObjects(api, ids) {
  return Promise.all(
    ids.map(id => api.getObject(id))
  );
}

module.exports = getObjects;
