<script>
export default {
  data() {
    return {
      testRef: null
    };
  },
};
</script>

<template>
  <div class="test-starter">
    <table>
      <tr>
        <th>Test Reference</th>
        <td>
          <input v-model="testRef"/>
        </td>
      </tr>
    </table>

    <button class="primary">Start</button>
  </div>
</template>

<style lang="less">

</style>
