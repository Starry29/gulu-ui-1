<template>
  <h1>Carousel 示例</h1>
  <!--  基础用法-->
  <Demo :component="Carousel1Demo" :desc-component="Carousel1Desc"/>
  <!--  箭头切换-->
  <Demo :component="Carousel2Demo" :desc-component="Carousel2Desc"/>
  <!--  垂直分布-->
  <Demo :component="Carousel3Demo" :desc-component="Carousel3Desc"/>

</template>

<script lang='ts' setup>
import Demo from "../Common/Demo.vue";
import Carousel1Demo from './Carousel1.demo.vue';
import Carousel2Demo from './Carousel2.demo.vue';
import Carousel3Demo from './Carousel3.demo.vue';
import Carousel1Desc from './Carousel1Desc.vue';
import Carousel2Desc from './Carousel2Desc.vue';
import Carousel3Desc from './Carousel3Desc.vue';
</script>



