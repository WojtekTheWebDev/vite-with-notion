<template>
  <div class="quote" :class="`quote-${data?.color}`">
    <RichText v-for="richText in data?.rich_text" :rich-text="richText" />
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { Quote } from "~/types";
import RichText from "./RichText.vue";
import Checkbox from "primevue/checkbox";

const props = defineProps({
  data: Object as PropType<Quote>,
});
</script>

<style scoped lang="scss">
@import "assets/css/annotations.scss";
@import "assets/css/colors.scss";

.quote {
  border-radius: 3px;
  margin-left: 1rem;
  padding: 1rem;
  border-left: 5px solid $color-gray;

  &-default {
    border-left: 5px solid $color-gray;
  }
  &-gray {
    border-left: 5px solid $color-gray;
  }
  &-brown {
    border-left: 5px solid $color-brown;
  }
  &-orange {
    border-left: 5px solid $color-orange;
  }
  &-yellow {
    border-left: 5px solid $color-yellow;
  }
  &-green {
    border-left: 5px solid $color-green;
  }
  &-blue {
    border-left: 5px solid $color-blue;
  }
  &-purple {
    border-left: 5px solid $color-purple;
  }
  &-pink {
    border-left: 5px solid $color-pink;
  }
  &-red {
    border-left: 5px solid $color-red;
  }
  &-gray_background {
    border-left: 5px solid $color-gray;
    background-color: $color-gray_background;
  }
  &-brown_background {
    border-left: 5px solid $color-brown;
    background-color: $color-brown_background;
  }
  &-orange_background {
    border-left: 5px solid $color-orange;
    background-color: $color-orange_background;
  }
  &-yellow_background {
    border-left: 5px solid $color-yellow;
    background-color: $color-yellow_background;
  }
  &-green_background {
    border-left: 5px solid $color-green;
    background-color: $color-green_background;
  }
  &-blue_background {
    border-left: 5px solid $color-blue;
    background-color: $color-blue_background;
  }
  &-purple_background {
    border-left: 5px solid $color-purple;
    background-color: $color-purple_background;
  }
  &-pink_background {
    border-left: 5px solid $color-pink;
    background-color: $color-pink_background;
  }
  &-red_background {
    border-left: 5px solid $color-red;
    background-color: $color-red_background;
  }
}
</style>
