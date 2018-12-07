<script>
import logo from '~/assets/img/justarrived-logo.png';

export default {
  data() {
    return {
      logo
    };
  }
};
</script>

<template>
  <div class="busy-layout">
    <div class="logo">
      <img :src="logo">
    </div>

    <div class="content">
      <nuxt/>
    </div>
  </div>
</template>

<style lang="less">
.busy-layout {
  max-width: 600px;
  margin: 0 auto;

  .logo {
    margin: 50px auto;
    overflow: hidden;
    height: 85px;
    width: 75px;
  }

  .content {
    text-align: center;
  }
}
</style>
