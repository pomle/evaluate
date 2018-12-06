<script>
import { random } from '~/lib/random';

export default {
  mounted() {
    const { testId, resultId } = this.$route.query;
    if (!testId || !resultId) {
      this.$router.replace({
        name: 'index'
      });
      return;
    }

    const sessionId = random(12);

    this.$store.dispatch('session/loadTest', {
      sessionId,
      testId,
      resultId
    });

    this.$router.replace({
      name: 'session-sessionId',
      params: { sessionId }
    });
  }
};
</script>

<template>
  <div class="test-bootstrap-page">
    <section class="intro">
      <h1>Please wait...</h1>
    </section>
  </div>
</template>
