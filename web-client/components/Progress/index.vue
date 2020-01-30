<script>
export default {
  props: {
    value: {
      type: Number,
      required: true
    }
  }
};
</script>

<template>
  <div class="progress">
    <div
      :style="{width: `${value * 100}%`}"
      class="value"/>
  </div>
</template>

<style lang="less">
.progress {
  .value {
    background: #a84398;
    height: 3px;
  }
}
</style>
