<script>
import { copy } from 'microclip';
import { random } from '~/lib/random';
import { encodeReference } from '~/lib/transcode';

function buildURL(path) {
  if (global.document) {
    const anchor = document.createElement('a');
    anchor.href = path;
    return anchor.href;
  }
  return path;
}

export default {
  data() {
    return {
      resultId: random(12),
      testRef: null,
      label: null
    };
  },

  computed: {
    testLocation() {
      const { testRef, resultId, label } = this;
      const ref = encodeReference(testRef, resultId, label);
      const location = { name: 'test-ref', params: { ref } };
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
    },

    isComplete() {
      if (!this.testRef) {
        return false;
      }
      if (!this.resultId) {
        return false;
      }
      return true;
    }
  },

  mounted() {
    const { testRef } = this.$route.query;
    if (testRef) {
      this.testRef = testRef;
    }
  },

  methods: {
    buildURL,

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
          <th>Label</th>
          <td>
            <input v-model="label">
          </td>
        </tr>
      </tbody>
    </table>

    <div class="links">
      <table>
        <tbody>
          <tr>
            <th>
              Test Link
            </th>
            <td>
              <input
                :value="isComplete ? testURL : ''"
                type="readonly">
            </td>
            <td>
              <button
                :class="{disabled: !isComplete}"
                @click="copyTestURL">Copy</button>
            </td>
          </tr>
          <tr>
            <th>
              Result Link
            </th>
            <td>
              <input
                :value="isComplete ? resultURL : ''"
                type="readonly">
            </td>
            <td>
              <button
                :class="{disabled: !isComplete}"
                @click="copyResultURL">Copy</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="less">
.link-page {
  .links {
    table {
      width: 100%;

      input {
        width: 500px;
      }
    }
  }
}
</style>
