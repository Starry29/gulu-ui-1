# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```javascript
import {GButton, GInput, GInputPassword, GInputTextArea, GSwitch, GCarousel, 
GCarouselItem, GTag, GPopover, Tabs, Tab, GDialog, openDialog} from "gulu-ui-1"
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```html
<template>
  <div>
    <g-dialog>对话框</g-dialog>
  </div>
</template>
<script>
import {GButton, GInput, GInputPassword, GInputTextArea, GSwitch, GCarousel, 
GCarouselItem, GTag, GPopover, Tabs, Tab, GDialog, openDialog} from "gulu-ui-1"
export default {
  components: {GDialog}
}
</script>
```
