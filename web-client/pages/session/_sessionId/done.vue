<script>
import Progress from '~/components/Progress';

export default {
  components: {
    Progress
  },

  props: {
    meta: {
      type: Object,
      required: true
    },

    session: {
      type: Object,
      required: true
    }
  },

  head() {
    return {
      title: 'Done - Just Evaluate'
    };
  },

  computed: {
    questionCount() {
      return this.session.test.questions.length;
    },

    questionsAnswered() {
      return Object.entries(this.session.answers).reduce(
        (sum, [questionId, answer]) => {
          if (answer.answerId) {
            return sum + 1;
          }
          return sum;
        },
        0
      );
    },

    questionsCommented() {
      return Object.entries(this.session.answers).reduce(
        (sum, [questionId, answer]) => {
          if (answer.comment) {
            return sum + 1;
          }
          return sum;
        },
        0
      );
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

    <div class="confirm">
      <div v-if="!meta.submitted">
        <h1>Done!</h1>

        <p>
          That was the last question. You have <b>answered {{ questionsAnswered }} / {{ questionCount }}</b> and provided a <b>comment on {{ questionsCommented }}</b> questions.
        </p>

        <p>
          When you are ready, <b>submit your answers</b> below.
        </p>

        <button
          :class="{disabled: meta.submitting}"
          class="primary"
          @click="submit">Submit</button>

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
      <div v-else>
        <h1>Thank you!</h1>

        <p>
          That's all. We hope you enjoyed doing the test.
        </p>
      </div>
    </div>
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
