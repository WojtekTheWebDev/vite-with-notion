<template>
  <h3>
    <RichText v-for="richText in data?.rich_text" :rich-text="richText" />
  </h3>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { Heading } from "../types";
import RichText from "./RichText.vue";
defineProps({
  data: Object as PropType<Heading>,
});
</script>
