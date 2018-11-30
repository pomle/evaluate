<script>
import Prism from 'prismjs';

export default {
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
        };
      });
    }
  },

  methods: {
    setAnswer(answerId) {
      const { questionId } = this.$route.params;
      this.$emit('selected', {
        questionId,
        answerId
      });
    },

    isSelected(answer) {
      return answer.id === this.session.answers[this.question.id].answerId;
    }
  }
};
</script>

<template>
  <div class="question">
    <div class="options">
      <div
        v-for="(option, index) in options"
        :key="index"
        :class="{selected: isSelected(option.answer)}"
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
    margin: -0.5em;
    width: 100%;

    .option {
      border-radius: 6px;
      flex: 1 1;
      cursor: pointer;
      margin: 0.5em;
      padding: 5px;

      &.selected {
        background-color: #7fea7f;
      }

      pre {
        height: 100%;
        margin: 0;
      }
    }
  }
}
</style>
