<script>
export default {
  layout: 'test',

  computed: {
    testId() {
      return this.$route.params.testId
    },

    test() {
      const id = this.testId
      return this.$store.state.test.tests.find(test => test.id === id)
    }
  },

  mounted() {
    this.$store.dispatch('test/loadTest', { id: this.testId })
  }
}
</script>

<template>
  <nuxt-child
    v-if="test"
    :test="test"/>
</template>
