<demo>
禁用输入框
</demo>
<template>
  <div>
    <Input v-model:value="textValue" placeholder="disable" disabled></Input>
  </div>
</template>

<script lang='ts' setup>
import {ref} from 'vue';
import Input from "../../lib/input/Input.vue";
const textValue = ref('')
</script>

<style lang='scss' scoped>
</style>