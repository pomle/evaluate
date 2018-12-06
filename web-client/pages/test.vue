<script>
import { random } from '~/lib/random';

export default {
  layout: 'busy',

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
  <div>
    <h1>Please wait...</h1>
  </div>
</template>
