<demo>
支持 level
</demo>
<template>
<div>
  <!--普通按钮-->
  <div>
    <g-button theme="button" level="main">主要按钮</g-button>
    <g-button theme="button">普通按钮</g-button>
    <g-button theme="button" level="danger">危险按钮</g-button>
  </div>
  <!--链接主题按钮-->
  <div>
    <g-button theme="link" level="main">主要链接按钮</g-button>
    <g-button theme="link">普通链接按钮</g-button>
    <g-button theme="link" level="danger">危险链接按钮</g-button>
  </div>
  <!--文字主题按钮-->
  <div>
    <g-button theme="text" level="main">主要文字按钮</g-button>
    <g-button theme="text">普通文字按钮</g-button>
    <g-button theme="text" level="danger">危险文字按钮</g-button>
  </div>
</div>
</template>

<script lang="ts" setup>
import GButton from '../../lib/Button.vue';
</script>

