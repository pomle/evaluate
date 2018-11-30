import KVDBStorage from '../lib/storage/kvdb.io';

const URL_ROOT = 'https://raw.githubusercontent.com/pomle/evaluate';

const resultStorage = new KVDBStorage();

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function random(len = 8) {
  const buffer = [];
  for (let i = 0; i < len; i++) {
    const char = CHARS[(CHARS.length * Math.random()) | 0];
    buffer.push(char);
  }
  return buffer.join('');
}

function fetchEncoded(url) {
  return fetch(url)
    .then(response => response.text())
    .then(decode);
}

function encode(data) {
  return btoa(JSON.stringify(data));
}

function decode(raw) {
  return JSON.parse(atob(raw));
}

export const state = () => ({
  results: [],
  tests: []
});

export const mutations = {
  addTest(state, { test }) {
    state.tests.push(test);
  },

  addResult(state, { result }) {
    state.results.push(result);
  },

  setAnswer(state, { testId, questionId, answerId }) {
    console.log(testId, questionId, answerId);
    const test = state.tests.find(test => test.id === testId);
    const question = test.data.questions.find(
      question => question.id === questionId
    );
    question.answer.id = answerId;
  }
};

export const actions = {
  async loadTest({ commit }, { testId, resultId }) {
    const testURL = [URL_ROOT, 'tests', testId].join('/');
    const data = await fetchEncoded(testURL);

    for (const question of data.questions) {
      question.answer = {
        id: null
      };
    }

    commit('addTest', {
      test: {
        id: testId,
        resultId,
        data
      }
    });
  },

  async loadResult({ commit }, { id }) {
    const data = await resultStorage.fetch(id).then(decode);

    commit('addResult', {
      result: {
        id,
        test: data
      }
    });
  },

  async saveResult({ state, commit }, { testId }) {
    const test = state.tests.find(test => test.id === testId);
    const resultId = test.resultId;
    await resultStorage.store(resultId, encode(test));
    console.log(resultId);
  }
};
