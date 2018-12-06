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
      title: 'Just Evaluate'
    };
  }
};
</script>

<template>
  <main>
    <section class="take-test">
      <h2>Take a Test</h2>

      <p>
        To take a test you have to provide a reference to the test to take.
      </p>

      <TestStarter/>
    </section>

    <section class="take-test">
      <h2>Create a Test</h2>

      <p>
        When you create a test we will generate two links for you. One is to be given to the candidate, the otherone is to see the result. Both links are completely anonymized and you will have to save the result URL yourself to be able to see the result.
      </p>

      <LinkComposer/>
    </section>
  </main>
</template>

<style lang="less">
.intro-page {
}
</style>
