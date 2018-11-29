async function loadData(api) {
  const foo = api.getFoo();
  const bar = api.getBar();
  return {
    foo: await foo,
    bar: await bar,
  };
}

module.exports = loadData;
