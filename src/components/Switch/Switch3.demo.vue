<demo>
支持 Size
</demo>
<template>
  <Switch v-model="value" size="large" Text="大尺寸">大尺寸</Switch>
  <br/>
  <Switch v-model="value" Text="默认情况">默认情况</Switch>
  <br/>
  <Switch v-model="value" size="small" Text="小尺寸">小尺寸</Switch>
</template>

<script lang='ts' setup>
import {ref} from 'vue';
import Switch from '../../lib/Switch.vue';
const value = ref(false);
</script>
