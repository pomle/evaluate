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
  }
};
</script>

<template>
  <nuxt-child
    v-if="session"
    :session="session"/>
</template>
