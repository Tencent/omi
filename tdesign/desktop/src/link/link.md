:: BASE_DOC ::

## API
### Link Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
content | TNode | - | 链接内容。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
default | TNode | - | 链接内容，同 content。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
disabled | Boolean | - | 禁用链接 | N
hover | String | underline | 链接悬浮态样式，有 文本颜色变化、添加下划线等 2 种方法。可选项：color/underline | N
href | String | - | 跳转链接 | N
prefixIcon | TElement | - | 前置图标。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
size | String | medium | 尺寸。可选项：small/medium/large。TS 类型：`SizeEnum`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
suffixIcon | TElement | - | 后置图标。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
target | String | - | 跳转方式，如：当前页面打开、新页面打开等，同 HTML 属性 target 含义相同 | N
theme | String | default | 组件风格，依次为默认色、品牌色、危险色、警告色、成功色。可选项：default/primary/danger/warning/success | N
underline | Boolean | - | 普通状态是否显示链接下划线 | N
onClick | Function |  | TS 类型：`(e: MouseEvent) => void`<br/>点击事件，禁用状态不会触发点击事件 | N
