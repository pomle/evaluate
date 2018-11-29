<script>
export default {
  props: {
    test: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="test">
    {{ test.data.tests[0].good.type }}
  </div>
</template>
