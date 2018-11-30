const uuidv4 = require('uuid/v4');
const path = require('path');
const fs = require('fs');

const DIR = "javascript";
const configPath = path.resolve(path.join('.', DIR, 'config.json'));
const config = require(configPath);

const output = {
  questions: [],
};

function loadSnippet(path) {
  return {
    id: uuidv4(),
    type: path.split('.').pop(),
    content: fs.readFileSync(path, 'utf8').trim(),
  };
}

for (const testName of config.tests) {
  const testPath = path.resolve(path.join('.', DIR, testName));
  const good = path.join(testPath, 'good.js');
  const bad = path.join(testPath, 'bad.js');

  const question = {
    id: uuidv4(),
    answers: [
      loadSnippet(good),
      loadSnippet(bad),
    ],
  };

  output.questions.push(question);
}

process.stdout.write(JSON.stringify(output));
