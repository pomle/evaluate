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
        v-for="(question, index) in test.data.questions"
        :key="index">
        <nuxt-link
          :to="{name: 'test-testId-questions-questionId', params: {
            testId: test.id,
            questionId: index,
        }}">Question {{ index }}</nuxt-link>
      </li>
    </ul>

    <nuxt-child :test="test"/>
  </div>
</template>
