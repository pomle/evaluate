<script>
export default {
  layout: 'test',

  computed: {
    test() {
      const {testId} = this.$route.params;
      return this.$store.state.test.tests.find(test => test.id === testId);
    }
  },

  mounted() {
    const {testId} = this.$route.params;
    const {resultId} = this.$route.query;
    this.$store.dispatch('test/loadTest', {
      testId,
      resultId,
    });
  }
};
</script>

<template>
  <nuxt-child
    v-if="test"
    :test="test"/>
</template>
