<script>
export default {
  layout: 'test',

  computed: {
    session() {
      const { sessionId } = this.$route.params;
      return this.$store.state.session.sessions.find(
        session => session.sessionId === sessionId
      );
    }
  },

  mounted() {
    const { sessionId } = this.$route.params;
    const { testId, resultId } = this.$route.query;
    this.$store.dispatch('session/loadTest', {
      sessionId,
      testId,
      resultId
    });
  }
};
</script>

<template>
  <nuxt-child
    v-if="session"
    :session="session"/>
</template>
