<demo>
自适应多文本框
</demo>
<template>
  <div>
    <g-input-text-area auto-size placeholder="Autosize height based on content lines"></g-input-text-area>
    <div style="margin: 24px 0"/>
    <g-input-text-area :auto-size="{minRow:2,maxRow:5}" placeholder="Autosize height with minimum and maximum number of lines"></g-input-text-area>
  </div>

</template>
<script lang='ts' setup>
import GInputTextArea from "../../lib/input/textArea.vue";
</script>