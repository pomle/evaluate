const uuidv4 = require('uuid/v4');
const path = require('path');
const fs = require('fs');
const {markdown} = require('markdown');

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

function parseStatement(markdown) {
  const statementIndex = markdown.findIndex(block => block[2] === 'Statement');
  if (statementIndex === -1) {
    return null;
  }
  return markdown[statementIndex + 1][1];
}

for (const testName of config.tests) {
  const testPath = path.resolve(path.join('.', DIR, testName));
  const goodPath = path.join(testPath, 'good.js');
  const badPath = path.join(testPath, 'bad.js');
  const docPath = path.join(testPath, 'README.md');
  const doc = markdown.parse(fs.readFileSync(docPath, 'utf8'));

  const question = {
    id: uuidv4(),
    statement: parseStatement(doc),
    answers: [
      loadSnippet(goodPath),
      loadSnippet(badPath),
    ],
  };

  output.questions.push(question);
}

const json = JSON.stringify(output);
const encoded = Buffer.from(json).toString('base64');

process.stdout.write(encoded);
