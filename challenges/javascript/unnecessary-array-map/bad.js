function runUpdate(entities) {
  entities.map(entity => {
    entity.update();
  });
}

module.exports = runUpdate;
