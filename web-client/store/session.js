import Vue from 'vue';
import { debounce } from 'debounce';
import { sort } from '../lib/random';
import LocalStorage from '../lib/storage/local';
import GitHubStorage from '../lib/storage/github';
import KVDBStorage from '../lib/storage/kvdb.io';

const localStorage = new LocalStorage('sessions');
const testStorage = new GitHubStorage();
const resultStorage = new KVDBStorage();

const storeSession = debounce(session => {
  localStorage.store(session.sessionId, session);
}, 2500);

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

  updateAnswer(state, { session, questionId, answerId }) {
    session.answers[questionId].answerId = answerId;
  },

  updateComment(state, { session, questionId, comment }) {
    session.answers[questionId].comment = comment;
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

    const session = {
      sessionId,
      resultId,
      testId,
      test,
      answers
    };

    commit('addSession', { session });

    commit('setSessionMeta', {
      sessionId,
      meta: { fetched: true, fetching: false }
    });

    storeSession(session);
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

  restoreSession({ commit }, { sessionId }) {
    const session = localStorage.fetch(sessionId);
    if (!session) {
      return;
    }

    commit('addSession', { session });

    commit('setSessionMeta', {
      sessionId,
      meta: { fetched: true, fetching: false }
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
  },

  setAnswer({ state, commit }, { sessionId, questionId, answerId }) {
    const session = state.sessions[sessionId];
    commit('updateAnswer', { session, questionId, answerId });
    storeSession(session);
  },

  setComment({ state, commit }, { sessionId, questionId, comment }) {
    const session = state.sessions[sessionId];
    commit('updateComment', { session, questionId, comment });
    storeSession(session);
  }
};
