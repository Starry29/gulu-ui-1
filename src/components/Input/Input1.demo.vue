<demo>
常规用法
</demo>
<template>
  <div>
    <Input v-model:value="textValue" placeholder="Basic Usage"></Input>
  </div>
</template>

<script lang='ts' setup>
import {ref} from 'vue';
import Input from "../../lib/input/Input.vue";
const textValue = ref('');
</script>

