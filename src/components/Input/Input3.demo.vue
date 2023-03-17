<demo>
禁用输入框
</demo>
<template>
  <div>
    <g-input v-model:value="textValue" placeholder="disable" disabled></g-input>
  </div>
</template>

<script lang='ts' setup>
import {ref} from 'vue';
import GInput from "../../lib/input/Input.vue";
const textValue = ref('')
</script>

<style lang='scss' scoped>
</style>