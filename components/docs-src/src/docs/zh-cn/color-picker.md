## ColorPicker 颜色选择器

Color Picker

<iframe height="351" style="width: 100%;" scrolling="no" title="OMIU ColorPicker" src="https://codepen.io/omijs/embed/gOaWmZE?height=351&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/omijs/pen/gOaWmZE'>OMIU Checkbox</a> by OMI
  (<a href='https://codepen.io/omijs'>@omijs</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 导入

```js
import '@omiu/color-picker'
```

或者直接 script 标签引入。


```html
<script src="https://unpkg.com/@omiu/color-picker"></script>
```

## 使用

```html
<o-color-picker></o-color-picker>
```


## API

### 属性

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

### 默认属性
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
### 事件
* init
* save
* change
* swatch-select
