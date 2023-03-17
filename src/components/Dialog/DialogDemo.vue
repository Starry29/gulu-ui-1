<template>
<h1>Dialog 示例</h1>
<Demo :component="Dialog1Demo" :desc-component="Dialog1Desc"/>
<Demo :component="Dialog2Demo" :desc-component="Dialog2Desc"/>
</template>

<script lang="ts" setup>
import Demo from '../Common/Demo.vue';
import Dialog1Demo from './Dialog1.demo.vue';
import Dialog2Demo from './Dialog2.demo.vue';
import Dialog1Desc from './Dialog1Desc.vue';
import Dialog2Desc from './Dialog2Desc.vue';

</script>
