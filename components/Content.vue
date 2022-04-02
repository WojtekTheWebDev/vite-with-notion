<template>
  <section v-for="result in results">
    <Heading1 v-if="result.type === 'heading_1'" :data="result.heading_1" />
    <Paragraph v-if="result.type === 'paragraph'" :data="result.paragraph" />
  </section>
</template>

<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { PropType } from "vue";
import { Content } from "../types";
import Heading1 from "./Heading1.vue";
import Paragraph from "./Paragraph.vue";

const props = defineProps({
  content: Object as PropType<Content>,
});

const results = computed(() => props.content?.results);
</script>

<style></style>
