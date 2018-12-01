<script>
import { random } from '~/lib/random';

export default {
  data() {
    return {
      resultId: random(12),
      testRef: 'cae844ce-f487-11e8-8f10-1040f388afa6'
    };
  },

  computed: {
    link() {
      const link = `/test?testId=${encodeURIComponent(
        this.testRef
      )}&resultId=${encodeURIComponent(this.resultId)}`;
      return link;
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

    <div class="link">
      <a :href="link">{{ link }}</a>
    </div>
  </div>
</template>

<style lang="less">
</style>
