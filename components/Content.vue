<template>
  <section v-for="result in results">
    <Heading1 v-if="result.type === 'heading_1'" :heading="result.heading_1" />
    {{ result.type }}
  </section>
</template>

<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { PropType } from "vue";
import { Content } from "../types";
import Heading1 from "./Heading1.vue";

const props = defineProps({
  content: Object as PropType<Content>,
});

const results = computed(() => props.content?.results);
</script>

<style></style>
