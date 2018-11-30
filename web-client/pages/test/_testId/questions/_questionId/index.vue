<script>
import Question from '~/components/Question'

export default {
  components: {
    Question
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
    }
  },

  methods: {
    getQuestionByIndex(index) {
      const question = this.test.data.questions[index]
      if (question) {
        return question.id
      }
      return null
    }
  }
}
</script>

<template>
  <div class="question-page">
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
