const URL_ROOT = 'https://raw.githubusercontent.com/pomle/evaluate';

function fetchEncoded(url) {
  return fetch(url)
    .then(response => response.text())
    .then(decode);
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
  async loadTest({ commit }, { id }) {
    const testURL = [URL_ROOT, 'tests', id].join('/');
    const data = await fetchEncoded(testURL);

    for (const question of data.questions) {
      question.answer = {
        id: null
      };
    }

    commit('addTest', {
      test: {
        id,
        data
      }
    });
  },

  async loadResult({ commit }, { id }) {
    const resultURL = [URL_ROOT, 'results', id].join('/');
    const data = await fetchEncoded(resultURL);

    commit('addResult', {
      result: {
        id,
        test: data
      }
    });
  }
};
