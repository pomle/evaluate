<script>
import { random } from '~/lib/random';

export default {
  data() {
    return {
      resultId: random(12),
      testRef: 'cae844ce-f487-11e8-8f10-1040f388afa6'
    };
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
      <nuxt-link :to="{name: 'test', query: {testId: testRef, resultId}}">Test URL</nuxt-link>
    </div>

    <div class="resultLink">
      <nuxt-link :to="{name: 'result-resultId', params: {resultId}}">Result URL</nuxt-link>
    </div>
  </div>
</template>

<style lang="less">
</style>
