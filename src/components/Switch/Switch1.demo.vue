<demo>
常规用法
</demo>

<template>
<g-switch v-model:value="bool"></g-switch>
</template>

<script lang="ts" setup>
import GSwitch from '../../lib/Switch.vue';
import {
  ref
} from 'vue';
const bool = ref(false);
</script>
