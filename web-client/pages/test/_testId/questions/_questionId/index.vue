<script>
import Question from '~/components/Question';
import Progress from '~/components/Progress';

export default {
  components: {
    Question,
    Progress
  },

  props: {
    test: {
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
    const total = this.test.data.questions.length;

    return {
      title: `${current} / ${total}`
    };
  },

  computed: {
    questionIndex() {
      return this.test.data.questions.findIndex(
        question => question.id === this.question.id
      );
    },

    nextQuestionId() {
      return this.getQuestionByIndex(this.questionIndex + 1);
    },

    prevQuestionId() {
      return this.getQuestionByIndex(this.questionIndex - 1);
    },

    progress() {
      return (this.questionIndex + 1) / (this.test.data.questions.length + 1);
    }
  },

  methods: {
    getQuestionByIndex(index) {
      const question = this.test.data.questions[index];
      if (question) {
        return question.id;
      }
      return null;
    },
    goToQuestion(questionId) {
      const testId = this.test.id;
      if (!questionId) {
        return;
      }

      this.$router.push({
        name: 'test-testId-questions-questionId',
        params: {
          testId,
          questionId
        }
      });
    },

    next() {
      if (this.nextQuestionId) {
        this.goToQuestion(this.nextQuestionId);
      } else {
        const testId = this.test.id;
        this.$router.push({
          name: 'test-testId-done',
          params: {
            testId
          }
        });
      }
    },

    prev() {
      if (this.prevQuestionId) {
        this.goToQuestion(this.prevQuestionId);
      } else {
        const testId = this.test.id;
        this.$router.push({
          name: 'test-testId',
          params: {
            testId
          }
        });
      }
    },

    setAnswer({ questionId, answerId }) {
      const testId = this.test.id;
      this.$store.commit('test/setAnswer', { testId, questionId, answerId });
    }
  }
};
</script>

<template>
  <div class="question-page">
    <Progress :value="progress"/>

    <Question
      :question="question"
      @selected="setAnswer"/>

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
  .question {
    height: 500px;
    margin: 20px -20px;
    .options {
      width: 100%;
    }
  }
}
</style>
