<script>
import { random } from '~/lib/random';
import { decodeReference } from '~/lib/transcode';

export default {
  layout: 'busy',

  mounted() {
    const { ref } = this.$route.params;
    if (!ref) {
      this.$router.replace({
        name: 'index'
      });
      return;
    }

    const { testId, resultId, label } = decodeReference(ref);
    const sessionId = random(12);

    this.$store.dispatch('session/loadTest', {
      sessionId,
      testId,
      resultId,
      label
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
