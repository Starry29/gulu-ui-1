<demo>
支持 size
</demo>
<template>
  <div>
    <!--普通theme下的size-->
    <div>
      <Button size="big">大大大</Button>
      <Button>中中中</Button>
      <Button size="small">小小小</Button>
    </div>
    <!--link下的不同尺寸button-->
    <div>
      <Button theme="link" size="big">大大大</Button>
      <Button theme="link">中中中</Button>
      <Button size="small" theme="link">小小小</Button>
    </div>
    <!--text下的不同尺寸button-->
    <div>
      <Button size="big" theme="text">大大大</Button>
      <Button theme="text">中中中</Button>
      <Button size="small" theme="text">小小小</Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "../../lib/Button.vue";
</script>
