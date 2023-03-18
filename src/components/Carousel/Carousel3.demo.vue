<demo>
支持垂直布局
</demo>
<template>
  <Carousel direction="vertical">
    <CarouselItem class="g-carousel-item" v-for="item in 6" :key="item"  >
      <h3 style="text-align: center;vertical-align: middle;">{{ item }}</h3>
    </CarouselItem>
  </Carousel>
</template>

<script lang='ts' setup>
import { onMounted } from 'vue';
import Carousel from '../../lib/Carousel/Carousel.vue';
import CarouselItem from '../../lib/Carousel/CarouselItem.vue'


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