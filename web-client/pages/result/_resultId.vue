<script>
export default {
  layout: 'test',

  computed: {
    resultId() {
      return this.$route.params.resultId;
    },

    result() {
      const id = this.resultId;
      return this.$store.state.test.results.find(result => result.id === id);
    }
  },

  mounted() {
    this.$store.dispatch('test/loadResult', { id: this.resultId });
  }
};
</script>

<template>
  <nuxt-child
    v-if="result"
    :result="result"/>
</template>
