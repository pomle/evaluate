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
      this.goToQuestion(1);
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
    <main>
      <h1>Evaluate</h1>

      <p>You will be presented <b>{{ session.test.questions.length }}</b> questions.</p>

      <button
        class="primary"
        @click.prevent="start">Start</button>
    </main>
  </div>
</template>
