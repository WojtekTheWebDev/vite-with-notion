<template>
  <section v-for="block in results">
    <Heading1 v-if="block.type === 'heading_1'" :data="block.heading_1" />
    <Heading2 v-if="block.type === 'heading_2'" :data="block.heading_2" />
    <Heading3 v-if="block.type === 'heading_3'" :data="block.heading_3" />
    <Paragraph v-if="block.type === 'paragraph'" :data="block.paragraph" />
    <ToDo v-if="block.type === 'to_do'" :data="block.to_do" />
  </section>
</template>

<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { PropType } from "vue";
import { Content } from "../types";
import Heading1 from "./Heading1.vue";
import Heading2 from "./Heading2.vue";
import Heading3 from "./Heading3.vue";
import Paragraph from "./Paragraph.vue";
import ToDo from "./ToDo.vue";


const props = defineProps({
  content: Object as PropType<Content>,
});

const results = computed(() => props.content?.results);
</script>

<style></style>
