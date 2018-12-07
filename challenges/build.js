#! /usr/bin/env node
const uuidv4 = require('uuid/v4');
const crypto = require('crypto')
const path = require('path');
const fs = require('fs');
const {markdown} = require('markdown');

const DIR = process.argv[2];
const buildPath = path.resolve(path.join(__dirname, 'build'));
const configPath = path.resolve(path.join('.', DIR, 'config.json'));
const config = require(configPath);

const test = {
  questions: [],
};

const solution = {
  answers: {},
};

function encode(data) {
  const json = JSON.stringify(data);
  return Buffer.from(json).toString('base64');
}

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

  const correct = loadSnippet(goodPath);
  const wrong = loadSnippet(badPath);

  const question = {
    id: uuidv4(),
    statement: parseStatement(doc),
    answers: [
      correct,
      wrong,
    ],
  };

  solution.answers[question.id] = correct.id;

  test.questions.push(question);
}

const testData = encode(test);
const solutionData = encode(solution);

const hasher = crypto.createHash('sha1');
hasher.update(testData);
const hash = hasher.digest('hex');
const name = Buffer.from(hash).toString('base64').slice(0, 12);

fs.writeFileSync(buildPath + '/' + name, testData, 'utf8');
fs.writeFileSync(buildPath + '/' + `${name}.solution`, solutionData, 'utf8');
