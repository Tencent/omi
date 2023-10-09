:: BASE_DOC ::

## API

### Skeleton Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式 | N
animation | String | none | options：gradient/flashed/none | N
delay | Number | 0 | \- | N
loading | Boolean | true | \- | N
rowCol | Array | - | Typescript：`SkeletonRowCol` `type SkeletonRowCol = Array<Number \| SkeletonRowColObj \| Array<SkeletonRowColObj>>` `interface SkeletonRowColObj { width?: string; height?: string; size?: string; marginRight?: string; marginLeft?: string; margin?: string; content?: string \| TNode; type?: 'rect' \| 'circle' \| 'text' }`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts)。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/skeleton/type.ts) | N
theme | String | text | options：text/avatar/paragraph/avatar-text/tab/article | N