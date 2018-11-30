const URL_ROOT = 'https://raw.githubusercontent.com/pomle/evaluate/tests/'

export const state = () => ({
  tests: []
})

export const mutations = {
  addTest(state, { test }) {
    state.tests.push(test)
  },

  setAnswer(state, { testId, questionId, answerId }) {
    console.log(testId, questionId, answerId)
    const test = state.tests.find(test => test.id === testId)
    const question = test.data.questions.find(
      question => question.id === questionId
    )
    question.answer.id = answerId
  }
}

export const actions = {
  async loadTest({ commit }, { id }) {
    const testURL = URL_ROOT + id
    const raw = await fetch(testURL).then(response => response.text())
    const decoded = atob(raw)
    const data = JSON.parse(decoded)

    for (const question of data.questions) {
      question.answer = {
        id: null
      }
    }

    commit('addTest', {
      test: {
        id,
        data
      }
    })
  }
}
