:: BASE_DOC ::

## API

### Comment Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，Typescript：`React.CSSProperties` | N
actions | Array | - | Typescript：`Array<TNode>`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
author | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
avatar | TNode | - | Typescript：`string \| AvatarProps \| TNode`，[Avatar API Documents](./avatar?tab=api)。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts)。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/comment/type.ts) | N
content | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
datetime | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
quote | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
reply | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
