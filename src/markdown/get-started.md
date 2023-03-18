# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```javascript
import {Button, Input, InputPassword, InputTextArea, Switch, Carousel, 
CarouselItem, Tag, Popover, Tabs, Tab, Dialog, openDialog} from "windmill-ui-001"
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
import {Button, Input, InputPassword, InputTextArea, Switch, Carousel, 
CarouselItem, Tag, Popover, Tabs, Tab, Dialog, openDialog} from "windmill-ui-001"
export default {
  components: {Dialog}
}
</script>
```
