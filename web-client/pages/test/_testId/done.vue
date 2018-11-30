<script>
import Progress from '~/components/Progress'

export default {
  layout: 'test',

  components: {
    Progress
  },

  props: {
    test: {
      type: Object,
      required: true
    }
  },

  methods: {
    prev() {
      const questions = this.test.data.questions
      const lastQuestion = questions[questions.length - 1]
      this.goToQuestion(lastQuestion.id)
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
  <div class="done-page">
    <Progress :value="1"/>

    <main class="confirm">
      <h1>Ready to submit?</h1>

      <button>Submit</button>
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

    button {
      font-size: 22px;
    }
  }
}
</style>
