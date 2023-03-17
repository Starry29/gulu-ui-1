<demo>
支持箭头切换
</demo>
<template>
<div style="width: 100%;height: 50px;text-align: center; line-height: 50px;color:#999">
    <span>arrow为default</span>
  </div>
  <g-carousel arrow="default">
    <g-carousel-item v-for="item in 6" :key="item">
      <h3 style="text-align: center;vertical-align: middle;">{{ item }}</h3>
    </g-carousel-item>
  </g-carousel>
  <div style="width: 100%;height: 50px;text-align: center; line-height: 50px;color:#999">
    <span>arrow为always</span>
  </div>
  <g-carousel arrow="always">
    <g-carousel-item v-for="item in 6" :key="item">
      <h3 style="text-align: center;vertical-align: middle;">{{ item }}</h3>
    </g-carousel-item>
  </g-carousel>
</template>

<script lang='ts' setup>
import { onMounted } from 'vue';
import GCarousel from '../../lib/Carousel/Carousel.vue';
import GCarouselItem from '../../lib/Carousel/CarouselItem.vue'
</script>

<style lang='scss' scoped>
.g-carousel-item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.g-carousel-item:nth-child(2n) {
  background-color: #99a9bf;
}

.g-carousel-item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>