<template>
  <div>
    <h1>Button 示例</h1>
    <!-- Theme示例 -->
    <Demo :component="Button1Demo" :desc-component="Button1Desc"/>
    <!-- size示例 -->
    <Demo :component="Button2Demo" :desc-component="Button2Desc"/>
    <!-- level示例-->
    <Demo :component="Button3Demo" :desc-component="Button3Desc"/>
    <!-- 按钮置灰-->
    <Demo :component="Button4Demo" :desc-component="Button4Desc"/>
    <!--  loading-->
    <Demo :component="Button5Demo" :desc-component="Button5Desc"/> 
  </div>
</template>

<script lang="ts" setup>
import Demo from "../Common/Demo.vue";
import Button1Demo from "./Button1.demo.vue";
import Button2Demo from "./Button2.demo.vue";
import Button3Demo from "./Button3.demo.vue";
import Button4Demo from "./Button4.demo.vue";
import Button5Demo from "./Button5.demo.vue";
import Button1Desc from './Button1Desc.vue';
import Button2Desc from './Button2Desc.vue';
import Button3Desc from './Button3Desc.vue';
import Button4Desc from './Button4Desc.vue';
import Button5Desc from './Button5Desc.vue';
</script>