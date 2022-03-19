<template>
  <h1>Welcome</h1>
  This page is:
  <ul>
    <li>Rendered to HTML.</li>
    <li>{{ page }}</li>
    <li>{{ blocks }}</li>
    <li>{{ block }}</li>
  </ul>
</template>

<script lang="ts" setup>

const props = defineProps({
  page: Object,
  blocks: Object,
  block: Object,
});
</script>
