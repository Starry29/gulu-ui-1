<demo>
支持不同的触发方式
</demo>
<template>
  <!--  点击触发-->
  <Popover :trigger="'click'" style="margin-right: 30px">
    <template #content>
      点击触发的内容
    </template>
    <Button>
      Click me
    </Button>
  </Popover>
  <!--  悬浮触发-->
  <Popover :trigger="'hover'">
    <template #content>
      悬浮触发的内容
    </template>
    <Button>
      Hover me
    </Button>
  </Popover>
</template>

<script lang='ts' setup>
import Popover from '../../lib/popover.vue';
import Button from '../../lib/Button.vue';
</script>