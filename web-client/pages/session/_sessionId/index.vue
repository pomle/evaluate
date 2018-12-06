<script>
import logo from '~/assets/img/justarrived-logo.png';

export default {
  props: {
    session: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      logo
    };
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
      <img 
        :src="logo" 
        class="logo">

      <p>
        You will be presented a test with <b>{{ session.test.questions.length }}</b> questions. Each test will ask you a question, let you pick an alternative, and let you motivate your answer. You can move forwards and backwards between the questions anytime you like.
      </p>

      <p>
        After the last question you will be asked to <b>confirm that you want to submit your answer</b>.
      </p>

      <div class="start">
        <button
          class="primary"
          @click.prevent="start">Start</button>
      </div>
    </main>
  </div>
</template>

<style lang="less">
.test-start-page {
  main {
    margin: 0 auto;
    max-width: 800px;

    .logo {
      display: block;
      margin: 2em auto;
    }

    .start {
      button {
        display: block;
        margin: 1em auto;
        width: 15em;
      }
    }
  }
}
</style>
