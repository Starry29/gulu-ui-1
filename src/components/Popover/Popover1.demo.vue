<demo>
支持不同的位置
</demo>
<template>
  <!--    -->
  <div class="placeTop">
    <Popover position="top">
      <template #content> 从上面弹出内容 </template>
      <g-button>top</g-button>
    </Popover>
  </div>
  <!--  -->
  <div class="placeMiddle">
    <Popover position="left">
      <template #content> 从左边弹出内容 </template>
      <g-button>left</g-button>
    </Popover>
    <!--    -->
    <Popover position="right">
      <template #content> 从右边弹出内容 </template>
      <g-button>right</g-button>
    </Popover>
  </div>
  <!--  -->
  <div class="placeBottom">
    <Popover position="bottom">
      <template #content> 从下面弹出内容 </template>
      <g-button>bottom</g-button>
    </Popover>
  </div>
</template>

<script lang='ts' setup>
import Popover from "../../lib/popover.vue";
import GBotton from '../../lib/Button.vue'
</script>
