:: BASE_DOC ::

## API
### Radio Props

name | type | default | description | required
-- | -- | -- | -- | --
allowUncheck | Boolean | false | \- | N
checked | Boolean | false | `v-model` and `v-model:checked` is supported | N
defaultChecked | Boolean | false | uncontrolled property | N
default | String / Slot / Function | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N
disabled | Boolean | undefined | \- | N
label | String / Slot / Function | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/src/common.ts) | N
name | String | - | \- | N
value | String / Number / Boolean | undefined | Typescript：`string \| number \| boolean` | N
onChange | Function |  | Typescript：`(checked: boolean, context: { e: Event }) => void`<br/> | N
onClick | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/>trigger on click | N

### Radio Events

name | params | description
-- | -- | --
change | `(checked: boolean, context: { e: Event })` | \-
click | `(context: { e: MouseEvent })` | trigger on click

### RadioGroup Props

name | type | default | description | required
-- | -- | -- | -- | --
allowUncheck | Boolean | false | \- | N
disabled | Boolean | - | \- | N
name | String | - | \- | N
options | Array | - | Typescript：`Array<RadioOption>` `type RadioOption = string \| number \| RadioOptionObj` `interface RadioOptionObj { label?: string \| TNode; value?: string \| number \| boolean; disabled?: boolean }`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts)。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/radio/type.ts) | N
size | String | medium | options：small/medium/large。Typescript：`SizeEnum`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
value | String / Number / Boolean | - | `v-model` and `v-model:value` is supported。Typescript：`T` `type RadioValue = string \| number \| boolean`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/radio/type.ts) | N
defaultValue | String / Number / Boolean | - | uncontrolled property。Typescript：`T` `type RadioValue = string \| number \| boolean`。[see more ts definition](:: BASE_DOC ::

## API
### Radio Props

name | type | default | description | required
-- | -- | -- | -- | --
allowUncheck | Boolean | false | \- | N
checked | Boolean | false | `v-model` and `v-model:checked` is supported | N
defaultChecked | Boolean | false | uncontrolled property | N
default | String / Slot / Function | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
disabled | Boolean | undefined | \- | N
label | String / Slot / Function | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
name | String | - | \- | N
value | String / Number / Boolean | undefined | Typescript：`string \| number \| boolean` | N
onChange | Function |  | Typescript：`(checked: boolean, context: { e: Event }) => void`<br/> | N
onClick | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/>trigger on click | N

### Radio Events

name | params | description
-- | -- | --
change | `(checked: boolean, context: { e: Event })` | \-
click | `(context: { e: MouseEvent })` | trigger on click

### RadioGroup Props

name | type | default | description | required
-- | -- | -- | -- | --
allowUncheck | Boolean | false | \- | N
disabled | Boolean | - | \- | N
name | String | - | \- | N
options | Array | - | Typescript：`Array<RadioOption>` `type RadioOption = string \| number \| RadioOptionObj` `interface RadioOptionObj { label?: string \| TNode; value?: string \| number \| boolean; disabled?: boolean }`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts)。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/radio/type.ts) | N
size | String | medium | options：small/medium/large。Typescript：`SizeEnum`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
value | String / Number / Boolean | - | `v-model` and `v-model:value` is supported。Typescript：`T` `type RadioValue = string \| number \| boolean`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/radio/type.ts) | N
defaultValue | String / Number / Boolean | - | uncontrolled property。Typescript：`T` `type RadioValue = string \| number \| boolean`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/radio/type.ts) | N
variant | String | outline | options：outline/primary-filled/default-filled | N
onChange | Function |  | Typescript：`(value: T, context: { e: Event }) => void`<br/> | N

### RadioGroup Events

name | params | description
-- | -- | --
change | `(value: T, context: { e: Event })` | \-) | N
variant | String | outline | options：outline/primary-filled/default-filled | N
onChange | Function |  | Typescript：`(value: T, context: { e: Event }) => void`<br/> | N

### RadioGroup Events

name | params | description
-- | -- | --
change | `(value: T, context: { e: Event })` | \-