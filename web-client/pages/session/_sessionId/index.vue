<script>
export default {
  props: {
    session: {
      type: Object,
      required: true
    }
  },

  head() {
    return {
      title: 'Welcome - Just Evaluate'
    };
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
  <div class="test-start-page">
    <main>
      <h1>Evaluate</h1>

      <p>You will be presented <b>{{ session.test.questions.length }}</b> questions.</p>

      <button
        class="primary"
        @click.prevent="start">Start</button>
    </main>
  </div>
</template>

<style lang="less">
.test-start-page {
  text-align: center;

  h1 {
    margin: 1em 0;
  }

  p {
  }
}
</style>
