<template>
  <h1>Welcome</h1>
  This page is:
  <ul>
    <li>Rendered to HTML.</li>
    <li>Interactive. <Counter /></li>
    <li>{{ movie }}</li>
  </ul>
</template>

<script lang="ts" setup>
import Counter from "../../components/Counter.vue";
import { PropType } from "vue";

const props = defineProps({
  movie: Object
})
</script>
