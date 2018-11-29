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
  <nuxt-child :test="test"/>
</template>
