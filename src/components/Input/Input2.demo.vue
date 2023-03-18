<demo>
密码框
</demo>
<template>
  <div>
    <InputPassword v-model:value="textValue" placeholder="password"></InputPassword>
  </div>
</template>

<script lang='ts' setup>
import {ref} from 'vue';
import InputPassword from '../../lib/input/InputPassword.vue';

const textValue = ref('');
</script>

