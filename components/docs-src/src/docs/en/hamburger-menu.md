## HamburgerMenu  

A menu button to toggle the side panel on and off.

<iframe height="318" style="width: 100%;" scrolling="no" title="OMIU Hamburger Menu" src="https://codepen.io/omijs/embed/MWapaJd?height=318&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/MWapaJd'>OMIU Hamburger Menu</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Import

```js
import '@omiu/hamburger-menu'
```

Or use script tag to ref it.


```html
<script src="https://unpkg.com/@omiu/hamburger-menu"></script>
```

## Usage

```html
<o-hamburger-menu></o-hamburger-menu>
```


## API

### Props

```tsx
{
  active?: boolean;
  ariaLabel?: string;
  color?: string;
}
```

## defaultProps

```tsx
{
  active: false,
  ariaLabel: '',
  color: 'black'
}
```

### Events

* change
