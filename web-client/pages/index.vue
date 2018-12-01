<script>
import TestStarter from '~/components/widgets/TestStarter';

export default {
  components: {
    TestStarter
  }
};
</script>

<template>
  <div class="intro-page">
    <section class="intro">
      <h1>Welcome to Evaluate</h1>
    </section>

    <section class="take-test">
      <h2>Take a Test</h2>

      <TestStarter/>
    </section>
  </div>
</template>

<style lang="less">
.intro-page {
}
</style>
