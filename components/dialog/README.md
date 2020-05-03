## Dialog

Pop anything you want in the middle of the page

* [→ CodePen](https://codepen.io/omijs/pen/dyYZvRP)

## Import

```js
import '@omiu/dialog'
```

Or use script tag to ref it.


```html
<script src="https://unpkg.com/@omiu/dialog"></script>
```

## Usage

```html
<o-dialog></o-dialog>
```

## API

### Props

```tsx
{
  visible: boolean
  title: String
  width: String
}
```

### 默认属性

```tsx
{
  visible: false,
  width: '50%'
}
```
### Events

* open
* mask-click
* close
