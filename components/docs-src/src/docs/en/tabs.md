## Tabs  

It is used to switch multiple display panels in the same area to make full use of space.

<iframe height="572" style="width: 100%;" scrolling="no" title="OMIU Tabs" src="https://codepen.io/omijs/embed/XWmjyXK?height=572&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/XWmjyXK'>OMIU Tabs</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Import

```js
import '@omiu/tabs'
```

Or use script tag to ref it.


```html
<script src="https://unpkg.com/@omiu/tabs"></script>
```

## Usage

```html
  <o-tabs 
    tabs="[{label:'User'},{label:'System'},{label:'Address'}]" 
    active-index="0">
	</o-tabs>
```


## API

### Props

```tsx
{
  tabs?: any[];
  activeIndex: number;
  type?: 'card' | 'border-card';
  position?: 'left' | 'right' | 'top' | 'bottom';
  closable?: boolean;
  addable?: boolean;
}
```

### defaultProps

```tsx
{
  position: 'top',
  closable: false,
  addable: false
}
```

### Events

* change
* remove
* add-icon-click
