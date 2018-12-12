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
  },

  computed: {
    answers() {
      return this.result.session.answers;
    },

    questions() {
      return this.result.session.test.questions;
    },

    solutions() {
      return this.result.solution;
    },

    correct() {
      return this.questions.reduce((sum, question) => {
        if (this.isCorrect(question)) {
          return sum + 1;
        }
        return sum;
      }, 0);
    }
  },

  methods: {
    isCorrect(question) {
      return (
        this.answers[question.id].answerId ===
        this.solutions.answers[question.id]
      );
    }
  }
};
</script>

<template>
  <div class="result-page">
    <h1>Results</h1>

    <div class="results">
      <p>
        <b>{{ ((correct / questions.length) * 100).toFixed() }}%</b> ({{ correct }} / {{ questions.length }}) correct
      </p>

      <div
        v-for="question in questions"
        :key="question.id"
        :class="
          [isCorrect(question) ? 'right' : 'wrong']
        "
        class="result">
        <div class="statement">
          <h3>Statement</h3>

          <p>{{ question.statement }}</p>
        </div>

        <div class="comment">
          <h3>Comment</h3>

          <p>
            {{ answers[question.id].comment || "Not Provided" }}
          </p>
        </div>

        <Question
          :session="result.session"
          :question="question"/>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.result-page {
  .results {
    .result {
      margin: 5em 0;

      .options {
        border-radius: 10px;

        .option {
          margin: 0.5em;
        }
      }

      &.right {
        .options {
          background: #009aff;
        }
      }

      &.wrong {
        .options {
          background: #ffc01d;
        }
      }

      .question {
        margin: 1em 0;
      }
    }
  }
}
</style>
