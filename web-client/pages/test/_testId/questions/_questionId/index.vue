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
      const question = this.question
      return [
        {
          html: Prism.highlight(
            question.good.content,
            Prism.languages.javascript,
            'javascript'
          )
        },
        {
          html: Prism.highlight(
            question.bad.content,
            Prism.languages.javascript,
            'javascript'
          )
        }
      ]
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
        class="options">
        <pre class="language-javascript">
          <code v-html="option.html"/>
        </pre>
      </div>
    </div>
  </div>
</template>
