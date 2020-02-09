<script>
export default {
  props: {
    session: {
      type: Object,
      required: true
    }
  },

  computed: {
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
