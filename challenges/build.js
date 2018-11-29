const path = require('path');
const fs = require('fs');

const DIR = "javascript";
const configPath = path.resolve(path.join('.', DIR, 'config.json'));
const config = require(configPath);

const output = {
  tests: [],
};

function loadSnippet(path) {
  return {
    type: path.split('.').pop(),
    content: fs.readFileSync(path, 'utf8').trim(),
  };
}

for (const testName of config.tests) {
  const testPath = path.resolve(path.join('.', DIR, testName));
  const good = path.join(testPath, 'good.js');
  const bad = path.join(testPath, 'bad.js');

  const test = {
    good: loadSnippet(good),
    bad: loadSnippet(bad),
  };

  output.tests.push(test);
}

process.stdout.write(JSON.stringify(output));
