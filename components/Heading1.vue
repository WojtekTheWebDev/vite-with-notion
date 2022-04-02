<template>
<h1>
  {{ heading?.rich_text?.[0]?.text.content }}
</h1>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { Heading } from "../types";
defineProps({
  heading: Object as PropType<Heading>,
});
</script>
