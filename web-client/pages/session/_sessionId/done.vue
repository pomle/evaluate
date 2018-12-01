<script>
import Progress from '~/components/Progress';

export default {
  layout: 'test',

  components: {
    Progress
  },

  props: {
    session: {
      type: Object,
      required: true
    }
  },

  methods: {
    prev() {
      const questions = this.session.test.questions;
      this.goToQuestion(questions.length);
    },

    goToQuestion(questionId) {
      const { sessionId } = this.session;
      if (!questionId) {
        return;
      }

      this.$router.push({
        name: 'session-sessionId-questions-questionId',
        params: {
          sessionId,
          questionId
        }
      });
    },

    submit() {
      const { sessionId } = this.session;
      this.$store.dispatch('session/saveResult', {
        sessionId
      });
    }
  }
};
</script>

<template>
  <div class="done-page">
    <Progress :value="1"/>

    <main class="confirm">
      <h1>Thank you for taking the test!</h1>

      <button
        v-if="session.resultId"
        class="primary"
        @click="submit">Submit</button>
    </main>

    <nav>
      <div class="prev">
        <button
          @click.prevent="prev">Prev</button>
      </div>
      <div class="next">
        <button class="disabled">Next</button>
      </div>
    </nav>
  </div>
</template>

<style lang="less">
.done-page {
  .confirm {
    margin: 5em 0;
    text-align: center;

    h1 {
      margin: 2em 0;
    }
  }
}
</style>
