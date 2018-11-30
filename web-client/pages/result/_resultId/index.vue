<script>
import Question from '~/components/Question';

export default {
  components: {
    Question
  },

  props: {
    result: {
      type: Object,
      required: true
    }
  }
};
</script>

<template>
  <div class="result-page">
    <h1>Results</h1>

    <div class="results">
      <div
        v-for="question in result.session.test.questions"
        :key="question.id"
        class="result">
        <Question
          :session="result.session"
          :question="question"/>

        <div class="comment">
          Comment {{ result.session.answers[question.id].comment }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.result-page {
  .results {
    margin: -5em 0;

    .result {
      margin: 5em 0;

      .question {
        margin: 1em 0;
      }
    }
  }
}
</style>
