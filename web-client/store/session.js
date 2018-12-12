import Vue from 'vue';
import { sort } from '../lib/random';
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
  meta: {
    session: {}
  },
  results: {},
  sessions: {}
});

export const mutations = {
  addSession(state, { session }) {
    Vue.set(state.sessions, session.sessionId, session);
  },

  addResult(state, { result }) {
    Vue.set(state.results, result.resultId, result);
  },

  setAnswer(state, { sessionId, questionId, answerId }) {
    state.sessions[sessionId].answers[questionId].answerId = answerId;
  },

  setSessionMeta(state, { sessionId, meta = {} }) {
    const sessionMeta = state.meta.session;
    if (!sessionMeta[sessionId]) {
      Vue.set(sessionMeta, sessionId, {
        fetched: false,
        fetching: false,
        submitting: false,
        submitted: false
      });
    }

    for (const [key, value] of Object.entries(meta)) {
      sessionMeta[sessionId][key] = value;
    }
  },

  setComment(state, { sessionId, questionId, comment }) {
    state.sessions[sessionId].answers[questionId].comment = comment;
  }
};

export const actions = {
  async loadTest({ commit }, { sessionId, testId, resultId }) {
    commit('setSessionMeta', { sessionId, meta: { fetching: true } });

    const testPath = ['pomle/evaluate', 'tests', testId].join('/');
    const test = await testStorage.fetchBlob(testPath).then(decode);

    test.questions = sort(test.questions, parseInt(resultId, 36));

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

    commit('setSessionMeta', {
      sessionId,
      meta: { fetched: true, fetching: false }
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
    const session = state.sessions[sessionId];
    if (!session.resultId) {
      throw new Error('Session missing result id');
    }

    commit('setSessionMeta', { sessionId, meta: { submitting: true } });

    const resultId = session.resultId;
    await resultStorage.store(resultId, encode(session));

    commit('setSessionMeta', {
      sessionId,
      meta: { submitting: false, submitted: true }
    });
  }
};
