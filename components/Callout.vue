<template>
  <Card :class="`color-${data?.color}`">
    <template #header>
      <div class="callout--header">
        <img
          v-if="fileIcon"
          class="callout--image"
          alt="Callout icon"
          :src="fileIcon"
        />
        <div v-else class="callout--emoji">{{ emoji }}</div>
      </div>
    </template>
    <template #content>
      <RichText v-for="richText in data?.rich_text" :rich-text="richText" />
    </template>
  </Card>
</template>

<script lang="ts" setup>
import { PropType, computed } from "vue";
import { Callout, File, Emoji } from "../types";
import RichText from "./RichText.vue";
import Card from "primevue/card";

const props = defineProps({
  data: Object as PropType<Callout>,
});

const fileIcon = computed(() => {
  return (
    (props.data?.icon as File).file?.url ||
    (props.data?.icon as File).external?.url
  );
});

const emoji = computed(() => {
  return (props.data?.icon as Emoji).emoji;
});
</script>

<style lang="scss" scoped>
@import "assets/css/annotations.scss";
@import "assets/css/colors.scss";

.p-card {
  border: 1px solid rgba($color-default, 0.2);
  box-shadow: none;
  display: flex;

  :deep(.p-card-content) {
    padding: 0;
  }
}

.p-card .p-card-content {
  padding: 0 !important;
}

.callout {
  &--header {
    padding: 1rem 1rem 0 1rem;
  }

  &--emoji {
    font-size: 1.5rem;
  }

  &--image {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
