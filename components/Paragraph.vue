<template>
  <p class="paragraph" :class="`color-${data?.color}`">
    <RichText v-for="richText in data?.rich_text" :rich-text="richText" />
  </p>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { Paragraph } from "../types";
import RichText from "./RichText.vue";
defineProps({
  data: Object as PropType<Paragraph>,
});
</script>

<style lang="scss" scoped>
@import "assets/css/annotations.scss";
@import "assets/css/colors.scss";

.paragraph {
  min-height: 1rem;
}
</style>
