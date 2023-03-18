<demo>支持不同尺寸</demo>
<template>
  <div>
    <Tag class="ml-2" size="large">Large</Tag>
    <Tag class="ml-2">Default</Tag>
    <Tag class="ml-2" size="small">Small</Tag>
  </div>

  <div class="mt-4">
    <Tag class="ml-2" size="large" closable>Large</Tag>
    <Tag class="ml-2" closable>Default</Tag>
    <Tag class="ml-2" size="small" closable>Small</Tag>
  </div>
</template>

<script lang='ts' setup>
import Tag from '../../lib/Tag.vue';
</script>
<style lang='scss' scoped>
  div {
    display: flex;
    flex-wrap: wrap;
    .mt-4{
      padding-top: 8px;
    }
  }
</style>