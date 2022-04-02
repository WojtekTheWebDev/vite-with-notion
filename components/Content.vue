<template>
  <section v-for="block in results">
    <Heading1 v-if="block.type === 'heading_1'" :data="block.heading_1" />
    <Paragraph v-if="block.type === 'paragraph'" :data="block.paragraph" />
    <ToDo v-if="block.type === 'to_do'" :data="block.to_do" />
  </section>
</template>

<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { PropType } from "vue";
import { Content } from "../types";
import Heading1 from "./Heading1.vue";
import Paragraph from "./Paragraph.vue";
import ToDo from "./ToDo.vue";

const props = defineProps({
  content: Object as PropType<Content>,
});

const results = computed(() => props.content?.results);
</script>

<style></style>
