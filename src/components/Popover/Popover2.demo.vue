<demo>
支持不同的触发方式
</demo>
<template>
  <!--  点击触发-->
  <g-popover :trigger="'click'" style="margin-right: 30px">
    <template #content>
      点击触发的内容
    </template>
    <g-button>
      Click me
    </g-button>
  </g-popover>
  <!--  悬浮触发-->
  <g-popover :trigger="'hover'">
    <template #content>
      悬浮触发的内容
    </template>
    <g-button>
      Hover me
    </g-button>
  </g-popover>
</template>

<script lang='ts' setup>
import GPopover from '../../lib/popover.vue';
import GButton from '../../lib/Button.vue';
</script>