<template>
  <p v-for="richText in data?.rich_text">
    {{ richText.text.content }}
  </p>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { Paragraph } from "../types";
defineProps({
  data: Object as PropType<Paragraph>,
});
</script>
