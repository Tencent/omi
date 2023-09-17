:: BASE_DOC ::

## API

### Badge Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，Typescript：`React.CSSProperties` | N
children | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
color | String | - | \- | N
content | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
count | TNode | 0 | Typescript：`string \| number \| TNode`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
dot | Boolean | false | \- | N
maxCount | Number | 99 | \- | N
offset | Array | - | Typescript：`Array<string \| number>` | N
shape | String | circle | options：circle/round | N
showZero | Boolean | false | \- | N
size | String | medium | options：small/medium | N