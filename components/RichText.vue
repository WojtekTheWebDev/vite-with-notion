<template>
  <span
    class="rich-text"
    :class="`color-${richText?.annotations.color}`"
  >
    <span
      class="rich-text--inner"
      :class="{
        'annotations-bold': richText?.annotations.bold,
        'annotations-italic': richText?.annotations.italic,
        'annotations-strikethrough': richText?.annotations.strikethrough,
        'annotations-underline': richText?.annotations.underline,
        'annotations-code': richText?.annotations.code,
      }"
    >
      <a
        v-if="richText?.text?.link"
        :href="richText.text.link.url"
        target="_blank"
      >
        {{ richText.text.content }}
      </a>
      <template v-else>
        {{ richText?.text?.content }}
      </template>
    </span>
  </span>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { RichText } from "../types";

const props = defineProps({
  richText: Object as PropType<RichText>,
});
</script>

<style lang="scss" scoped>
.rich-text {
  &--inner {
    color: inherit;

    a {
      font-weight: 600;
      color: inherit;
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import "assets/css/annotations.scss";
@import "assets/css/colors.scss";
</style>
