<script>
import LinkComposer from '~/components/widgets/LinkComposer';

export default {
  components: {
    LinkComposer
  }
};
</script>

<template>
  <div class="link-page">
    <section class="intro">
      <h1>Create link</h1>
    </section>

    <section class="take-test">
      <h2>Create a test link</h2>

      <LinkComposer/>
    </section>
  </div>
</template>
