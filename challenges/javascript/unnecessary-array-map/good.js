function runUpdate(entities) {
  entities.forEach(entity => {
    entity.update();
  });
}

module.exports = runUpdate;
