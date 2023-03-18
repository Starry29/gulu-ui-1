<demo>
支持不同的位置
</demo>
<template>
  <!--    -->
  <div class="placeTop">
    <Popover position="top">
      <template #content> 从上面弹出内容 </template>
      <Button>top</Button>
    </Popover>
  </div>
  <!--  -->
  <div class="placeMiddle">
    <Popover position="left">
      <template #content> 从左边弹出内容 </template>
      <Button>left</Button>
    </Popover>
    <!--    -->
    <Popover position="right">
      <template #content> 从右边弹出内容 </template>
      <Button>right</Button>
    </Popover>
  </div>
  <!--  -->
  <div class="placeBottom">
    <Popover position="bottom">
      <template #content> 从下面弹出内容 </template>
      <Button>bottom</Button>
    </Popover>
  </div>
</template>

<script lang='ts' setup>
import Popover from '../../lib/popover.vue';
import Button from '../../lib/Button.vue';
</script>
