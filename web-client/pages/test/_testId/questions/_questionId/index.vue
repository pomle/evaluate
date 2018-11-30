<script>
import Question from '~/components/Question'
import Progress from '~/components/Progress'

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

  computed: {
    questionIndex() {
      return this.test.data.questions.findIndex(
        question => question.id === this.question.id
      )
    },

    nextQuestionId() {
      return this.getQuestionByIndex(this.questionIndex + 1)
    },

    prevQuestionId() {
      return this.getQuestionByIndex(this.questionIndex - 1)
    },

    progress() {
      return this.questionIndex / this.test.data.questions.length
    }
  },

  methods: {
    getQuestionByIndex(index) {
      const question = this.test.data.questions[index]
      if (question) {
        return question.id
      }
      return null
    },
    goToQuestion(questionId) {
      const testId = this.test.id
      if (!questionId) {
        return
      }

      this.$router.push({
        name: 'test-testId-questions-questionId',
        params: {
          testId,
          questionId
        }
      })
    },

    next() {
      if (this.nextQuestionId) {
        this.goToQuestion(this.nextQuestionId);
      } else {
        const testId = this.test.id
        this.$router.push({
          name: 'test-testId-done',
          params: {
            testId,
          }
        });
      }
    },

    prev() {
      this.goToQuestion(this.prevQuestionId);
    }
  }
}
</script>

<template>
  <div class="question-page">
    <Progress :value="progress"/>

    <Question :question="question"/>

    <nav>
      <div class="prev">
        <button
          :class="{disabled: !prevQuestionId}"
          @click.prevent="prev">Prev</button>
      </div>
      <div class="next">
        <button @click.prevent="next">Next</button>
      </div>
    </nav>
  </div>
</template>

<style lang="less">
.question-page {
  display: flex;
  flex-flow: column;
  margin: auto;
  width: 1000px;

  .question {
    height: 500px;
    margin: 20px -20px;
    .options {
      width: 100%;
    }
  }
}

nav {
  display: flex;
  justify-content: space-between;

  .prev,
  .next {
    margin: 1em;
  }

  button {
    font-size: 20px;
  }
}
</style>
