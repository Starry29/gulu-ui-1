<demo>
支持 Size
</demo>
<template>
  <g-switch v-model="value" size="large" Text="大尺寸">大尺寸</g-switch>
  <br/>
  <g-switch v-model="value" Text="默认情况">默认情况</g-switch>
  <br/>
  <g-switch v-model="value" size="small" Text="小尺寸">小尺寸</g-switch>
</template>

<script lang='ts' setup>
import {ref} from 'vue';
import GSwitch from '../../lib/Switch.vue';
const value = ref(false);
</script>
