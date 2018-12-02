<script>
import LinkComposer from '~/components/widgets/LinkComposer';
import TestStarter from '~/components/widgets/TestStarter';

export default {
  components: {
    LinkComposer,
    TestStarter
  },

  head() {
    return {
      title: 'Evaluate'
    };
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

    <section class="take-test">
      <h2>Create a Test</h2>

      <LinkComposer/>
    </section>
  </div>
</template>

<style lang="less">
.intro-page {
}
</style>
