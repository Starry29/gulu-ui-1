<demo>
支持 disabled
</demo>
<template>
<Switch v-model:value="bool.active" disabled />
</template>

<script lang="ts" setup>
import Switch from '../../lib/Switch.vue';
import {reactive} from 'vue';
const bool = reactive({ active: true });
</script>
