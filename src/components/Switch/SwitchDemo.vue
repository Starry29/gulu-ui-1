<template>
  <div>
    <h1>Switch 示例</h1>
    <Demo :component="Switch1Demo" :desc-component="Switch1Desc"/>
    <Demo :component="Switch2Demo" :desc-component="Switch2Desc"/>
    <Demo :component="Switch3Demo" :desc-component="Switch3Desc"/>
  </div>
</template>

<script lang="ts" setup>
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";
import Switch3Demo from "./Switch3.demo.vue";
import Switch1Desc from './Switch1Desc.vue';
import Switch2Desc from './Switch2Desc.vue';
import Switch3Desc from './Switch3Desc.vue';
import Demo from "../Common/Demo.vue";
import { ref } from "vue";
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>
