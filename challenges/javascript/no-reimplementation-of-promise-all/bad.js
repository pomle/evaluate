function getObjects(api, ids) {
  const results = [];
  let complete = 0;
  return new Promise(resolve => {
    for (const id of ids) {
      api.getObject(id).then(object => {
        results.push(object);
        complete++;
        if (complete === ids.length) {
          resolve(results);
        }
      });
    }
  });
}

module.exports = getObjects;
