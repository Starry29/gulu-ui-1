<demo>
支持 disabled
</demo>
<template>
<g-switch v-model:value="bool.active" disabled />
</template>

<script lang="ts" setup>
import GSwitch from '../../lib/Switch.vue';
import {reactive} from 'vue';
const bool = reactive({ active: true });
</script>
