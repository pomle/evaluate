<script>
export default {
  props: {
    test: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="test">
    <ul>
      <li
        v-for="question in test.data.questions"
        :key="question.id">
        <nuxt-link
          :to="{name: 'test-testId-questions-questionId', params: {
            testId: test.id,
            questionId: question.id,
        }}">Question {{ index }}</nuxt-link>
      </li>
    </ul>

    <nuxt-child :test="test"/>
  </div>
</template>
