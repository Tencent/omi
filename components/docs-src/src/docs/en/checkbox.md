## Checkbox 

Used to select multiple options.

<iframe height="391" style="width: 100%;" scrolling="no" title="OMIU Checkbox" src="https://codepen.io/omijs/embed/MWapwNZ?height=391&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/MWapwNZ'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Import

```js
import '@omiu/checkbox'
```

Or use script tag to ref it.


```html
<script src="https://unpkg.com/@omiu/checkbox"></script>
```

## Usage

```html
<o-checkbox label='Label'> </o-checkbox>
```


## API

### Props

```tsx
{
  disabled: boolean;
  checked: boolean;
  value: string;
  label: string;
  indeterminate: boolean;
}
```

### Events

* change
