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

function parseStatement(meta) {
  return meta.statement;
}

for (const testName of config.tests) {
  const testPath = path.resolve(path.join('.', DIR, testName));
  const metaPath = path.join(testPath, 'meta.json');
  const meta = require(metaPath);

  const options = meta.options.map(option => {
    const srcPath = path.join(testPath, option.src);
    return {
      correct: option.correct,
      answer: loadSnippet(srcPath),
    };
  });

  const question = {
    id: uuidv4(),
    statement: parseStatement(meta),
    answers: options.map(option => option.answer),
  };

  solution.answers[question.id] = options.find(option => option.correct).answer.id;

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
