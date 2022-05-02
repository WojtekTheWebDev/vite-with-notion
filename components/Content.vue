<template>
  <section v-for="block in results">
    <Heading1
      v-if="block.type === BlockTypes.Heading1"
      :data="block.heading_1"
    />
    <Heading2
      v-if="block.type === BlockTypes.Heading2"
      :data="block.heading_2"
    />
    <Heading3
      v-if="block.type === BlockTypes.Heading3"
      :data="block.heading_3"
    />
    <Paragraph
      v-if="block.type === BlockTypes.Paragraph"
      :data="block.paragraph"
    />
    <Callout v-if="block.type === BlockTypes.Callout" :data="block.callout" />
    <ToDo v-if="block.type === BlockTypes.ToDo" :data="block.to_do" />
    <Quote v-if="block.type === BlockTypes.Quote" :data="block.quote" />
  </section>
</template>

<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { PropType } from "vue";
import { Content, BlockTypes } from "../types";
import Heading1 from "./Heading1.vue";
import Heading2 from "./Heading2.vue";
import Heading3 from "./Heading3.vue";
import Paragraph from "./Paragraph.vue";
import Callout from "./Callout.vue";
import Quote from "./Quote.vue";
import ToDo from "./ToDo.vue";

const props = defineProps({
  content: Object as PropType<Content>,
});

const results = computed(() => props.content?.results);
</script>
