<template>
  <div class="test-layout">
    <nuxt/>
  </div>
</template>

<style lang="less">
.test-layout {
  color: #fff;
  display: flex;
  flex-flow: column;
  margin: auto;
  width: 1000px;

  nav {
    display: flex;
    justify-content: space-between;
    margin: -1em;

    .prev,
    .next {
      margin: 1em;
    }

    button {
      font-size: 20px;
    }
  }
}
</style>
