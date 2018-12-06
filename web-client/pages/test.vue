<script>
import { random } from '~/lib/random';

export default {
  mounted() {
    const { testRef, resultId } = this.$route.query;
    if (!testRef || !resultId) {
      this.$router.replace({
        name: 'index'
      });
      return;
    }

    const testId = testRef;
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
