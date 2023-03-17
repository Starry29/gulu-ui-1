<template>
  <h1>Popover 示例</h1>
  <div class="popover">
  <Demo :component="Popover1Demo" :desc-component="Popover1Desc"></Demo>
  </div>
  <!--  点击还是hover方式触发-->
  <div>
  <Demo :component="Popover2Demo" :desc-component="Popover2Desc"></Demo>
  </div>
  <!--  在浮窗内关闭-->
  <div>
  <Demo :component="Popover3Demo" :desc-component="Popover3Desc"></Demo>
  </div>
</template>

<script lang='ts' setup>
import Demo from '../Common/Demo.vue';
import Popover1Demo from './Popover1.demo.vue';
import Popover2Demo from './Popover2.demo.vue';
import Popover3Demo from './Popover3.demo.vue';
import Popover1Desc from './Popover1Desc.vue';
import Popover2Desc from './Popover2Desc.vue';
import Popover3Desc from './Popover3Desc.vue';
</script>

<style lang='scss' scoped>
.popover {
  :deep(.demo-component) {
    left: 30%;
    position: relative;
    transform: translateX(-25%);
  }

  :deep(.placeTop,) {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :deep(.placeMiddle,) {
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  :deep(.placeBottom,) {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>