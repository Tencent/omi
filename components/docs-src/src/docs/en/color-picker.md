## ColorPicker

Color Picker

<iframe height="351" style="width: 100%;" scrolling="no" title="OMIU ColorPicker" src="https://codepen.io/omijs/embed/gOaWmZE?height=351&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/gOaWmZE'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Import

```js
import '@omiu/color-picker'
```

Or use script tag to ref it.


```html
<script src="https://unpkg.com/@omiu/color-picker"></script>
```

## Usage

```html
<o-color-picker></o-color-picker>
```

## API

### Props

```tsx
{
  button?: boolean,
  preview?: boolean,
  opacity?: boolean,
  hue?: boolean,

  hex?: boolean,
  rgba?: boolean,
  hsla?: boolean,
  hsva?: boolean,
  input?: boolean,
  clear?: boolean,
  save?: boolean,
  cmyk?: boolean,

  default?: string,

  swatches?: string[],

  inline?: boolean,
  strings?: {
    save: string,  // Default for save button
    clear: string // Default for clear button
  },
  width?: string
}
```

### defaultProps

```tsx
{
  button: true,
  preview: true,
  opacity: true,
  hue: true,

  hex: true,
  rgba: true,
  hsla: true,
  hsva: false,
  input: true,
  clear: true,
  save: true,
  cmyk: false,

  default: '#07c160',

  swatches: [],
  inline: true,

  strings: {
    save: 'Save',  // Default for save button
    clear: 'Clear' // Default for clear button
  }
}
```
### Events

* init
* save
* change
* swatch-select
