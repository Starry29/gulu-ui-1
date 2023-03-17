<template>
  <h1>Tag 标签</h1>
  <Demo :component="Tag1Demo" :desc-component="Tag1Desc"/>
  <Demo :component="Tag2Demo" :desc-component="Tag2Desc"/>
  <Demo :component="Tag3Demo" :desc-component="Tag3Desc"/>
  <Demo :component="Tag4Demo" :desc-component="Tag4Desc"/>
  <Demo :component="Tag5Demo" :desc-component="Tag5Desc"/>
  <Demo :component="Tag6Demo" :desc-component="Tag6Desc"/>
</template>

<script lang='ts' setup>
import Demo from '../Common/Demo.vue'
import Tag1Demo from './Tag1.demo.vue';
import Tag2Demo from './Tag2.demo.vue';
import Tag3Demo from './Tag3.demo.vue';
import Tag4Demo from './Tag4.demo.vue';
import Tag5Demo from './Tag5.demo.vue';
import Tag6Demo from './Tag6.demo.vue';
import Tag1Desc from './Tag1Desc.vue';
import Tag2Desc from './Tag2Desc.vue';
import Tag3Desc from './Tag3Desc.vue';
import Tag4Desc from './Tag4Desc.vue';
import Tag5Desc from './Tag5Desc.vue';
import Tag6Desc from './Tag6Desc.vue';
</script>
