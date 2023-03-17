<demo>
常规用法
</demo>
<template>
  <div>
    <g-input v-model:value="textValue" placeholder="Basic Usage"></g-input>
  </div>
</template>

<script lang='ts' setup>
import {ref} from 'vue';
import GInput from "../../lib/input/Input.vue";
const textValue = ref('');
</script>

