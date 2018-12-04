<script>
import { random } from '~/lib/random';
import { copy } from 'microclip';

export default {
  data() {
    return {
      resultId: random(12),
      testRef: null
    };
  },

  computed: {
    testLocation() {
      const { testRef, resultId } = this;
      const location = { name: 'test', query: { testRef, resultId } };
      return location;
    },

    testURL() {
      const url = this.$router.resolve(this.testLocation);
      return this.buildURL(url.href);
    },

    resultLocation() {
      const { resultId } = this;
      const location = { name: 'result-resultId', params: { resultId } };
      return location;
    },

    resultURL() {
      const url = this.$router.resolve(this.resultLocation);
      return this.buildURL(url.href);
    }
  },

  mounted() {
    const { testRef } = this.$route.query;
    if (testRef) {
      this.testRef = testRef;
    }
  },

  methods: {
    buildURL(path) {
      const anchor = document.createElement('a');
      anchor.href = path;
      return anchor.href;
    },

    copyTestURL() {
      copy(this.testURL);
    },

    copyResultURL() {
      copy(this.resultURL);
    }
  }
};
</script>

<template>
  <div class="link-page">
    <table>
      <tbody>
        <tr>
          <th>Test Reference</th>
          <td>
            <input v-model="testRef">
          </td>
        </tr>
        <tr>
          <th>Result Id</th>
          <td>
            <input v-model="resultId">
          </td>
        </tr>
      </tbody>
    </table>

    <div class="testLink">

      <table>
        <tbody>
          <tr>
            <td>
              <input
                :value="testURL"
                type="readonly">
            </td>
            <td>
              <button @click="copyTestURL">Copy</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="resultLink">
      <table>
        <tbody>
          <tr>
            <td>
              <input
                :value="resultURL"
                type="readonly">
            </td>
            <td>
              <button @click="copyResultURL">Copy</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="less">
</style>
