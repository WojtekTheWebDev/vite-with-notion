<template>
  <Button type="button" @click="state.count++">Counter {{ state.count }}</Button>
</template>

<script lang="ts" setup>
import { reactive,  } from 'vue'
import Button from 'primevue/button';


const state = reactive({ count: 0 })
</script>
