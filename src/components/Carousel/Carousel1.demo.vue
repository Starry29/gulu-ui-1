<demo>
基础用法
</demo>
<template>
  <div style="width: 100%;height: 50px;text-align: center; line-height: 50px;color:#999">
    <span>trigger默认为click</span>
  </div>
  <Carousel height="150">
    <CarouselItem class="g-carousel-item" v-for="item in 6" :key="item">
      <h3 style="text-align: center;vertical-align: middle;">{{ item }}</h3>
    </CarouselItem>
  </Carousel>
  <div style="width: 100%;height: 50px;text-align: center; line-height: 50px;color:#999">
    <span>trigger为hover时</span>
  </div>
  <Carousel height="150" trigger="hover">
    <CarouselItem class="g-carousel-item" v-for="item in 6" :key="item">
      <h3 style="text-align: center;vertical-align: middle;">{{ item }}</h3>
    </CarouselItem>
  </Carousel>
</template>

<script lang='ts' setup>
import Carousel from '../../lib/Carousel/Carousel.vue';
import CarouselItem from '../../lib/Carousel/CarouselItem.vue'
</script>

<style lang='scss' scoped>
h3 {
  color: #465c79;
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