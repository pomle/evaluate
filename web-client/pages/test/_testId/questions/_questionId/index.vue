<script>
import Question from '~/components/Question'

export default {
  components: {
    Question
  },

  props: {
    question: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="question-page">
    <Question :question="question"/>

    <nav>
      <button>Prev</button>
      <button>Next</button>
    </nav>
  </div>
</template>
