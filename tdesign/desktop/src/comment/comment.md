:: BASE_DOC ::

## API
### Comment Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
actions | Array | - | 操作。TS 类型：`Array<TNode>`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
author | TNode | - | 作者。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
avatar | TNode | - | 头像。TS 类型：`string \| AvatarProps \| TNode`，[Avatar API Documents](./avatar?tab=api)。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts)。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/comment/type.ts) | N
content | TNode | - | 内容。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
datetime | TNode | - | 时间。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
quote | TNode | - | 引用。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts)| N
reply | TNode | - | 回复。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
