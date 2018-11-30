<script>
export default {
  props: {
    test: {
      type: Object,
      required: true
    }
  },

  methods: {
    start() {
      const questions = this.test.data.questions
      const firstQuestion = questions[0]
      this.goToQuestion(firstQuestion.id)
    },

    goToQuestion(questionId) {
      const testId = this.test.id
      this.$router.push({
        name: 'test-testId-questions-questionId',
        params: {
          testId,
          questionId
        }
      })
    }
  }
}
</script>

<template>
  <div class="start-page">
    <main class="confirm">
      <h1>Welcome to Evaluate?</h1>

      <button @click.prevent="start">Start</button>
    </main>
  </div>
</template>
