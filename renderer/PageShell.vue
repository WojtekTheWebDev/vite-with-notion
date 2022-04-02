<template>
  <div class="layout">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Link from "./Link.vue";
</script>

<style scoped lang="scss">
@import 'assets/css/main.scss';

* {
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-text;
}

.layout {
  display: flex;
  margin: auto;
  max-width: 1440px;
}
</style>
