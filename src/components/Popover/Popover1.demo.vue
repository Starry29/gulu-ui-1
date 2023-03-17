<demo>
支持不同的位置
</demo>
<template>
  <!--    -->
  <div class="placeTop">
    <g-popover position="top">
      <template #content> 从上面弹出内容 </template>
      <g-button>top</g-button>
    </g-popover>
  </div>
  <!--  -->
  <div class="placeMiddle">
    <g-popover position="left">
      <template #content> 从左边弹出内容 </template>
      <g-button>left</g-button>
    </g-popover>
    <!--    -->
    <g-popover position="right">
      <template #content> 从右边弹出内容 </template>
      <g-button>right</g-button>
    </g-popover>
  </div>
  <!--  -->
  <div class="placeBottom">
    <g-popover position="bottom">
      <template #content> 从下面弹出内容 </template>
      <g-button>bottom</g-button>
    </g-popover>
  </div>
</template>

<script lang='ts' setup>
import GPopover from '../../lib/popover.vue';
import GBotton from '../../lib/Button.vue';
</script>
