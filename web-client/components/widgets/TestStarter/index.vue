<script>
import { random } from '~/lib/random';

export default {
  data() {
    return {
      testRef: null
    };
  },

  methods: {
    start() {
      const testId = this.testRef;
      const sessionId = random(12);
      const resultId = random(12);

      this.$store.dispatch('session/loadTest', {
        sessionId,
        testId,
        resultId
      });

      this.$router.push({
        name: 'session-sessionId',
        params: { sessionId }
      });
    }
  }
};
</script>

<template>
  <div class="test-starter">
    <table>
      <tbody>
        <tr>
          <th>Test Reference</th>
          <td>
            <input v-model="testRef">
          </td>
          <td>
            <button
              :class="{disabled: !testRef}"
              class="primary"
              @click="start">Start</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="less">
</style>
