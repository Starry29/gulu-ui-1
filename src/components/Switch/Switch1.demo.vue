<demo>
常规用法
</demo>

<template>
<Switch v-model:value="bool"></Switch>
</template>

<script lang="ts" setup>
import Switch from '../../lib/Switch.vue';
import {
  ref
} from 'vue';
const bool = ref(false);
</script>
