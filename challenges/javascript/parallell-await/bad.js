async function loadData(api) {
  const foo = await api.getFoo();
  const bar = await api.getBar();
  return { foo, bar };
}

module.exports = loadData;
