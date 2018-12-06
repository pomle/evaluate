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
  <div class="default">
    <header>
      <img 
        :src="logo" 
        class="logo">
    </header>

    <nuxt/>
  </div>
</template>

<style lang="less">
#__layout > .default {
  & > header {
    .logo {
      height: 40px;
      margin: 10px;
    }
  }

  section {
    max-width: 1000px;
    margin: 2em auto;
  }
}
</style>
