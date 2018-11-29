<script>
export default {
  computed: {
    test() {
      const { testId } = this.$route.params
      return this.$store.state.test.tests.find(test => test.id === testId)
    },

    question() {
      const { questionId } = this.$route.params
      return this.test.data.tests.find((question, index) => {
        console.log(index, questionId)
        return index == questionId
      })
    }
  }
}
</script>

<template>
  <nuxt-child
    :question="question"/>
</template>
