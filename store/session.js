import GitHubStorage from '../lib/storage/github';
import KVDBStorage from '../lib/storage/kvdb.io';

const testStorage = new GitHubStorage();
const resultStorage = new KVDBStorage();

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
  },

  setComment(state, { sessionId, questionId, comment }) {
    const session = state.sessions.find(
      session => session.sessionId === sessionId
    );
    session.answers[questionId].comment = comment;
  }
};

export const actions = {
  async loadTest({ commit }, { sessionId, testId, resultId }) {
    const testPath = ['pomle/evaluate', 'tests', testId].join('/');
    const test = await testStorage.fetchBlob(testPath).then(decode);

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
