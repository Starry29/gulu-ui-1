<demo>支持不同尺寸</demo>
<template>
  <g-row>
    <g-tag class="ml-2" size="large">Large</g-tag>
    <g-tag class="ml-2">Default</g-tag>
    <g-tag class="ml-2" size="small">Small</g-tag>
  </g-row>

  <g-row class="mt-4">
    <g-tag class="ml-2" size="large" closable>Large</g-tag>
    <g-tag class="ml-2" closable>Default</g-tag>
    <g-tag class="ml-2" size="small" closable>Small</g-tag>
  </g-row>
</template>

<script lang='ts' setup>
import GTag from '../../lib/Tag.vue';
</script>
<style lang='scss' scoped>
  g-row {
    display: flex;
    flex-wrap: wrap;
    .mt-4{
      padding-top: 8px;
    }
  }
</style>