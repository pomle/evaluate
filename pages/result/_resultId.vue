<script>
export default {
  layout: 'test',

  computed: {
    result() {
      const { resultId } = this.$route.params;
      return this.$store.state.session.results[resultId];
    }
  },

  mounted() {
    const { resultId } = this.$route.params;
    this.$store.dispatch('session/loadResult', { resultId });
  }
};
</script>

<template>
  <nuxt-child
    v-if="result"
    :result="result"/>
</template>
