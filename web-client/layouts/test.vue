<template>
  <div class="test-layout">
    <nuxt/>
  </div>
</template>

<style lang="less">
.test-layout {
  display: flex;
  flex-flow: column;
  margin: auto;
  width: 1000px;

  .progress {
    position: fixed;
    left: 0;
    right: 0;
  }

  nav {
    display: flex;
    justify-content: space-between;
    margin: -1em;

    .prev,
    .next {
      margin: 1em;
    }
  }
}
</style>
