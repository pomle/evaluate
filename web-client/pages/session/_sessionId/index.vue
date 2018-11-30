<script>
export default {
  props: {
    session: {
      type: Object,
      required: true
    }
  },

  methods: {
    start() {
      const { questions } = this.session.test;
      const firstQuestion = questions[0];
      this.goToQuestion(firstQuestion.id);
    },

    goToQuestion(questionId) {
      const { sessionId } = this.session;
      this.$router.push({
        name: 'session-sessionId-questions-questionId',
        params: {
          sessionId,
          questionId
        }
      });
    }
  }
};
</script>

<template>
  <div class="start-page">
    <main class="confirm">
      <h1>Welcome to Evaluate?</h1>

      <button @click.prevent="start">Start</button>
    </main>
  </div>
</template>
