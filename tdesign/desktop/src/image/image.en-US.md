:: BASE_DOC ::

## API
### Image Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，Typescript：`React.CSSProperties` | N
alt | String | - | \- | N
error | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
fallback | String | - | display `fallback` image on `src` loading failed. you can also use `error` to define more complex error content | N
fit | String | fill | options: contain/cover/fill/none/scale-down | N
gallery | Boolean | false | \- | N
lazy | Boolean | false | \- | N
loading | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
overlayContent | TNode | - | overlay on the top of image。Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
overlayTrigger | String | always | options: always/hover | N
placeholder | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
position | String | center | \- | N
referrerpolicy | String | - | attribute of `<img>`, [MDN Definition](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)。options: no-referrer/no-referrer-when-downgrade/origin/origin-when-cross-origin/same-origin/strict-origin/strict-origin-when-cross-origin/unsafe-url | N
shape | String | square | options: circle/round/square | N
src | String / Object | - | src attribute of `<img>`. image File can also be loaded。Typescript：`string \| File` | N
srcset | Object | - | for `.avif` and `.webp` image url, load `srcset` before `src`。Typescript：`ImageSrcset` `interface ImageSrcset { 'image/avif': string; 'image/webp': string; }`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/image/type.ts) | N
onError | Function |  | Typescript：`(context: { e: ImageEvent }) => void`<br/>trigger on image load failed | N
onLoad | Function |  | Typescript：`(context: { e: ImageEvent }) => void`<br/>trigger on image loaded | N