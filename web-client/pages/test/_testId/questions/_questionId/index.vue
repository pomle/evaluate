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
        <nuxt-link
          v-if="prevQuestionId"
          :to="{name: 'test-testId-questions-questionId', params: {
            testId: test.id,
            questionId: prevQuestionId,
        }}"><button>Prev</button></nuxt-link>
      </div>
      <div class="next">
        <nuxt-link
          v-if="nextQuestionId"
          :to="{name: 'test-testId-questions-questionId', params: {
            testId: test.id,
            questionId: nextQuestionId,
        }}"><button>Next</button></nuxt-link>
      </div>
    </nav>
  </div>
</template>

<style lang="less">
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
