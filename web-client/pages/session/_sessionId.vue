<script>
export default {
  layout: 'test',

  computed: {
    session() {
      const { sessionId } = this.$route.params;
      return this.$store.state.session.sessions[sessionId];
    },

    meta() {
      const { sessionId } = this.$route.params;
      return this.$store.state.session.meta.session[sessionId];
    }
  },

  mounted() {
    const { sessionId } = this.$route.params;
    const sessionMeta = this.$store.state.session.meta.session[sessionId];
    if (!sessionMeta) {
      this.$router.replace({ name: 'index' });
      return;
    }
  }
};
</script>

<template>
  <nuxt-child
    v-if="session"
    :session="session"
    :meta="meta" />
</template>
