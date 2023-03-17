<demo>
常规使用
</demo>
<template>
<div>
  <g-button @click="toggle">打开对话框</g-button>
  <g-dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
    <template v-slot:content>
      <strong>标题</strong>
      <div>内容</div>
    </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </g-dialog>
</div>
</template>

<script lang="ts">
import GDialog from '../../lib/Dialog.vue';
import { ref } from 'vue';
import GBotton from '../../lib/Button.vue';
export default {
  components: {
    GDialog,
    GBotton
  },
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const f1 = () => {
      return true
    }
    const f2 = () => {}
    return {
      x,
      toggle,
      f1,
      f2
    }
  }
}
</script>
