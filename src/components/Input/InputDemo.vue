<template>
  <div>
    <h1>Input 示例</h1>
    <!--普通案例-->
    <Demo :component="Input1Demo" />
    <!--密码输入框-->
    <Demo :component="Input2Demo" />
    <!--禁用输入框-->
    <Demo :component="Input3Demo" />
    <!--自适应多行文本-->
    <Demo :component="Input4Demo" :desc-component="Input4Desc"/>
  </div>
</template>

<script lang='ts' setup>
import Input1Demo from "./Input1.demo.vue";
import Input2Demo from "./Input2.demo.vue";
import Input3Demo from "./Input3.demo.vue";
import Input4Demo from "./Input4.demo.vue";
import Input4Desc from "./Input4Desc.vue"
import Demo from '../Common/Demo.vue';
</script>

<style lang='scss' scoped>
</style>