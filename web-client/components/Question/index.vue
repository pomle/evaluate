<script>
import Prism from 'prismjs'

export default {
  props: {
    question: {
      type: Object,
      required: true
    }
  },

  computed: {
    options() {
      return this.question.answers.map(answer => {
        return {
          answer,
          html: Prism.highlight(
            answer.content,
            Prism.languages.javascript,
            'javascript'
          )
        }
      })
    }
  },

  methods: {
    setAnswer(answerId) {
      const { testId, questionId } = this.$route.params
      this.$store.commit('test/setAnswer', {
        testId,
        questionId,
        answerId
      })
    }
  }
}
</script>

<template>
  <div class="question">
    <div class="options">
      <div
        v-for="(option, index) in options"
        :key="index"
        :class="{selected: option.answer.id === question.answer.id}"
        class="option"
        @click="setAnswer(option.answer.id)">
        <pre class="language-javascript"><code v-html="option.html"/></pre>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.question {
  display: flex;
  flex-flow: column;
  align-items: center;

  .options {
    display: flex;
    margin: -1em;

    .option {
      border-radius: 6px;
      cursor: pointer;
      margin: 1em;
      min-width: 400px;
      padding: 5px;

      &.selected {
        background-color: green;
      }

      pre {
        margin: 0;
      }
    }
  }
}
</style>
