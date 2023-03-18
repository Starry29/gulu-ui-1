<demo>圆形标签</demo>
<template>
  <div class="flex flex-wrap gap-2 my-2">
    <Tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        class="ml-2"
        effect="dark"
        round
    >
      {{ item.label }}
    </Tag>
  </div>
  <div class="flex flex-wrap gap-2">
    <Tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        class="ml-2"
        effect="light"
        round
    >
      {{ item.label }}
    </Tag>
  </div>
  <div class="flex flex-wrap gap-2 my-2">
    <Tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        class="ml-2"
        effect="plain"
        round
    >
      {{ item.label }}
    </Tag>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Tag from '../../lib/Tag.vue';
const items = ref([
  {type: '', label: 'Tag 1'},
  {type: 'success', label: 'Tag 2'},
  {type: 'processing', label: 'Tag 3'},
  {type: 'danger', label: 'Tag 4'},
  {type: 'warning', label: 'Tag 5'}
])
</script>
