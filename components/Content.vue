<template>
  <section v-for="result in results">
    {{ result.type }}
  </section>
</template>

<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { PropType } from "vue";
import { Content } from "../types";

const props = defineProps({
  content: Object as PropType<Content>,
});

const results = computed(() => props.content?.results);

</script>

<style></style>
