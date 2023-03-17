<demo>
支持 size
</demo>
<template>
  <div>
    <!--普通theme下的size-->
    <div>
      <g-button size="big">大大大</g-button>
      <g-button>中中中</g-button>
      <g-button size="small">小小小</g-button>
    </div>
    <!--link下的不同尺寸button-->
    <div>
      <g-button theme="link" size="big">大大大</g-button>
      <g-button theme="link">中中中</g-button>
      <g-button size="small" theme="link">小小小</g-button>
    </div>
    <!--text下的不同尺寸button-->
    <div>
      <g-button size="big" theme="text">大大大</g-button>
      <g-button theme="text">中中中</g-button>
      <g-button size="small" theme="text">小小小</g-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import GButton from '../../lib/Button.vue';
</script>
