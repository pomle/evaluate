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
  sessions: []
});

export const mutations = {
  addSession(state, { session }) {
    state.sessions.push(session);
  },

  addResult(state, { result }) {
    state.results.push(result);
  },

  setAnswer(state, { sessionId, questionId, answerId }) {
    const session = state.sessions.find(
      session => session.sessionId === sessionId
    );
    session.answers[questionId].answerId = answerId;
  }
};

export const actions = {
  async loadTest({ commit }, { sessionId, testId, resultId }) {
    const testURL = [URL_ROOT, 'tests', testId].join('/');
    const test = await fetchEncoded(testURL);

    const answers = test.questions.reduce((answers, question) => {
      answers[question.id] = {
        answerId: null,
        comment: null
      };
      return answers;
    }, Object.create(null));

    commit('addSession', {
      session: {
        sessionId,
        resultId,
        testId,
        test,
        answers
      }
    });
  },

  async loadResult({ commit }, { resultId }) {
    const session = await resultStorage.fetch(resultId).then(decode);

    commit('addResult', {
      result: {
        resultId,
        session
      }
    });
  },

  async saveResult({ state, commit }, { sessionId }) {
    const session = state.sessions.find(
      session => session.sessionId === sessionId
    );
    if (!session.resultId) {
      throw new Error('Session missing result id');
    }

    const resultId = session.resultId;
    await resultStorage.store(resultId, encode(session));
    console.log(resultId);
  }
};
