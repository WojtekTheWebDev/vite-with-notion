<template>
  <section v-for="result in results">
    {{ result.type }}
  </section>
</template>

<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { PropType } from "vue";
import { Page } from "../types";

const props = defineProps({
  content: Object as PropType<Page["content"]>,
});

const results = computed(() => props.content?.results);

</script>

<style></style>
