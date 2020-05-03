## ActionSheet

Mobile pop-up options list

* [→ CodePen](https://codepen.io/omijs/pen/wvKdoNJ)

## Import

```js
import '@omiu/action-sheet'
```

Or use script tag to ref it.


```html
<script src="https://unpkg.com/@omiu/action-sheet"></script>
```

## Usage

```html
<o-action-sheet></o-action-sheet>
```

## API

### Props

```tsx
{
  type: string,
  menus: any[],
  actions: any[],
  show: boolean
}
```

### 默认属性

```tsx
{
  type: '',
  menus: [],
  actions: [],
  show: false
}
```
### Events

* item-click
* close
