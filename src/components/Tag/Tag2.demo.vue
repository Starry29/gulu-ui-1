<demo>可移除标签</demo>
<template>
  <Tag
      v-for="tag in tags"
      :key="tag"
      class="ml-2"
      closable
      @close="handleClose(tag)"
  >
    {{ tag }}
  </Tag>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import Tag from '../../lib/Tag.vue';
const tags = ref(['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5']);
const handleClose = (tag: string) => {
  tags.value.splice(tags.value.indexOf(tag), 1);
};
</script>
