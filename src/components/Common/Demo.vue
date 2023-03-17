<template>
  <!--组件里写的demo标签里的内容-->
  <h2 class="demoHeader">{{ component.__sourceCodeTitle }}</h2>
  <!--描述-->
  <div>
    <component :is="descComponent"></component>
  </div>
  <div class="demo">
    <!--当前组件展示主要效果-->
    <div class="demo-component">
      <component :is="component"></component>
    </div>
    <!--点击按钮-->
    <div class="demo-actions">
      <Button @click="hideCode" v-if="codeVisible">隐藏代码</Button>
      <Button @click="showCode" v-else>查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html" />
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
import "prismjs";
import "prismjs/themes/prism.css";
import { computed, ref } from "vue";
const Prism = (window as any).Prism;
export default {
  components: {
    Button,
  },
  props: {
    component: Object,
    descComponent: Object
  },
  setup(props) {
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    const showCode = () => (codeVisible.value = true);
    const hideCode = () => (codeVisible.value = false);
    const codeVisible = ref(false);
    return {
      Prism,
      html,
      codeVisible,
      showCode,
      hideCode,
    };
  },
};
</script>


<style lang="scss" scoped>
$border-color: #d9d9d9;

h2 {
  font-size: 20px;
  padding: 16px 0px;
  border-bottom: 1px solid $border-color;
}

.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  &-component {
    padding: 42px 24px 50px;
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
