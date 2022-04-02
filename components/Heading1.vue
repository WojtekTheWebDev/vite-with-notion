<template>
  <h1>
    <RichText v-for="richText in data?.rich_text" :rich-text="richText" />
  </h1>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { Heading } from "../types";
import RichText from "./RichText.vue";
defineProps({
  data: Object as PropType<Heading>,
});
</script>
