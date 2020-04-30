## Transition

Define transition animation for entering and leaving

* [→ CodePen](https://codepen.io/omijs/pen/JjYyezQ)

## Import

```js
import '@omiu/transition'
```

Or use script tag to ref it.


```html
<script src="https://unpkg.com/@omiu/transition"></script>
```

## Usage

```html
<o-transition></o-transition>
```

## API

### Props

```tsx
{
  name: string
  leavingTime?: number
  autoRemove?: boolean
}
```

### 默认属性

```tsx
{
  name: 'o'
}
```
### Events

* BeforeEnter
* beforeEnter
* AfterEnter
* afterEnter
* enter
* BeforeLeave
* beforeLeave
* AfterLeave
* afterLeave
* leave
