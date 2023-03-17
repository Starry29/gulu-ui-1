<demo>
一键打开 Dialog
</demo>
<template>
<div>
  <g-button @click="showDialog">打开对话框</g-button>
</div>
</template>

<script lang="ts">
import {
  openDialog
} from "../../lib/index";
import GBotton from '../../lib/Button.vue'
import {
  ref,
  h
} from 'vue'
export default {
  components: {
    GBotton
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        }
      })
    }
    return {
      showDialog
    }
  }
}
</script>
