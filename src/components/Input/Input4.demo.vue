<demo>
自适应多文本框
</demo>
<template>
  <div>
    <InputTextArea auto-size placeholder="Autosize height based on content lines"></InputTextArea>
    <div style="margin: 24px 0"/>
    <InputTextArea :auto-size="{minRow:2,maxRow:5}" placeholder="Autosize height with minimum and maximum number of lines"></InputTextArea>
  </div>

</template>
<script lang='ts' setup>
import InputTextArea from "../../lib/input/textArea.vue";
</script>