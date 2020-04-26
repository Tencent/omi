## Link 

Used to jump to a new page.

<iframe height="372" style="width: 100%;" scrolling="no" title="OMIU Link" src="https://codepen.io/omijs/embed/KKdNBaO?height=372&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/KKdNBaO'>OMIU Link</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Import

```js
import '@omiu/link'
```

Or use script tag to ref it.


```html
<script src="https://unpkg.com/@omiu/link"></script>
```

## Usage

```html
<o-link 
  target="_blank" 
  href="https://tencent.github.io/omi/">
  Default
</o-link>
```


## API

### Props

```tsx
{
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text';
  disabled?: boolean;
  underline?: boolean;
  href?: string;
  target: string;
}
```

### defaultProps

```tsx
{
  underline: true,
  disabled: false
}
```

