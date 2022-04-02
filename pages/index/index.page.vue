<template>
  <article>
    <Content :content="page?.content" />
  </article>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { Page } from "../../types";
import Content from "../../components/Content.vue";

const props = defineProps({
  page: Object as PropType<Page>,
});
</script>
