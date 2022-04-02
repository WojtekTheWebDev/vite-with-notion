<template>
  <div class="to-do" :class="`color-${data?.color}`">
    <Checkbox class="checkbox" :model-value="data?.checked" :binary="true" :disabled="true" />
    <RichText v-for="richText in data?.rich_text" :rich-text="richText" />
  </div>
</template>

<script lang="ts" setup>
import { PropType, ref } from "vue";
import { ToDo } from "../types";
import RichText from "./RichText.vue";
import Checkbox from 'primevue/checkbox';

const props = defineProps({
  data: Object as PropType<ToDo>,
});
</script>

<style lang="scss" scoped>
.to-do {
  padding: 0.5rem 0;
}

.checkbox {
  margin-right: 0.5rem;
}
</style>