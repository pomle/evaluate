<script>
export default {
  computed: {
    session() {
      const { sessionId } = this.$route.params;
      return this.$store.state.session.sessions.find(
        session => session.sessionId === sessionId
      );
    },

    question() {
      const { questionId } = this.$route.params;
      return this.session.test.questions[questionId - 1];
    }
  }
};
</script>

<template>
  <nuxt-child
    :session="session"
    :question="question"/>
</template>
