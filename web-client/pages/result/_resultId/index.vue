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

    <div class="questions">
      <Question
        v-for="question in result.session.test.questions"
        :key="question.id"
        :session="result.session"
        :question="question"/>
    </div>
  </div>
</template>

<style lang="less">
.result-page {
  .questions {
    .question {
      margin: 2em 0;
    }
  }
}
</style>
