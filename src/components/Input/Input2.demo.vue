<demo>
密码框
</demo>
<template>
  <div>
    <g-input-password v-model:value="textValue" placeholder="password"></g-input-password>
  </div>
</template>

<script lang='ts' setup>
import {ref} from 'vue';
import GInputPassword from '../../lib/input/InputPassword.vue';

const textValue = ref('');
</script>

