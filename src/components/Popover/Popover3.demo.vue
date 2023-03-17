<demo>
支持浮层内关闭
</demo>
<template>
  <Popover v-model:visible="visible">
    <template #content>
      就是个简单的的数据
      <g-button theme="link" level="main" @click="Close">close</g-button>
    </template>
    <g-button>Click me</g-button>
  </Popover>
</template>

<script lang='ts' setup>
import {ref} from 'vue';
import Popover from "../../lib/popover.vue";
import GButton from '../../lib/Button.vue'

const visible = ref(false);

function Close() {
  visible.value = false;
}
</script>
