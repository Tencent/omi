:: BASE_DOC ::

## API
### Link Props

name | type | default | description | required
-- | -- | -- | -- | --
children | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
default | TNode | - | Typescript： `string \| TNode`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
content | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
disabled | Boolean | - | make link to be disabled | N
hover | String | underline | hover link style。options：color/underline | N
href | String | - | \- | N
prefixIcon | TElement | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
size | String | medium | options：small/medium/large。Typescript：`SizeEnum`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
suffixIcon | TElement | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
target | String | - | target is an attribute of `<a>` | N
theme | String | default | options：default/primary/danger/warning/success | N
underline | Boolean | - | \- | N
onClick | Function |  | Typescript：`(e: MouseEvent) => void`<br/>click event, it won't trigger when it's disabled | N
