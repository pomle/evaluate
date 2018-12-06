<script>
import Question from '~/components/Question';
import Progress from '~/components/Progress';

export default {
  components: {
    Question,
    Progress
  },

  props: {
    session: {
      type: Object,
      required: true
    },

    question: {
      type: Object,
      required: true
    }
  },

  head() {
    const current = this.questionIndex + 1;
    const total = this.session.test.questions.length;

    return {
      title: `(${current} / ${total}) Question - Just Evaluate`
    };
  },

  computed: {
    comment: {
      get() {
        return this.session.answers[this.question.id].comment;
      },

      set(comment) {
        const { sessionId } = this.session;
        this.$store.commit('session/setComment', {
          sessionId,
          questionId: this.question.id,
          comment
        });
      }
    },

    questionIndex() {
      return this.session.test.questions.findIndex(
        question => question.id === this.question.id
      );
    },

    nextQuestionId() {
      return this.questionIndex + 2;
    },

    prevQuestionId() {
      return this.questionIndex;
    },

    progress() {
      return (
        (this.questionIndex + 1) / (this.session.test.questions.length + 1)
      );
    }
  },

  methods: {
    getQuestionByIndex(index) {
      const question = this.session.test.questions[index];
      if (question) {
        return question.id;
      }
      return null;
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

    next() {
      if (this.nextQuestionId <= this.session.test.questions.length) {
        this.goToQuestion(this.nextQuestionId);
      } else {
        const { sessionId } = this.session;
        this.$router.push({
          name: 'session-sessionId-done',
          params: {
            sessionId
          }
        });
      }
    },

    prev() {
      if (this.prevQuestionId > 0) {
        this.goToQuestion(this.prevQuestionId);
      } else {
        const { sessionId } = this.session;
        this.$router.push({
          name: 'session-sessionId',
          params: {
            sessionId
          }
        });
      }
    },

    setAnswer({ questionId, answerId }) {
      const { sessionId } = this.session;
      this.$store.commit('session/setAnswer', {
        sessionId,
        questionId,
        answerId
      });
    }
  }
};
</script>

<template>
  <div class="question-page">
    <Progress :value="progress"/>

    <div class="response">
      <div class="question-container">
        <Question
          :session="session"
          :question="question"
          @selected="setAnswer"/>
      </div>

      <div class="comment">
        <textarea
          v-model="comment"
          placeholder="Motivate your answer"/>
      </div>
    </div>

    <nav>
      <div class="prev">
        <button
          @click.prevent="prev">Prev</button>
      </div>
      <div class="next">
        <button
          class="primary"
          @click.prevent="next">Next</button>
      </div>
    </nav>
  </div>
</template>

<style lang="less">
.question-page {
  .response {
    margin: 2em 0;

    .question-container {
      margin: 40px 0;
    }

    .comment {
      margin: 40px 0;

      textarea {
        height: 100px;
        width: 100%;
      }
    }
  }
}
</style>
