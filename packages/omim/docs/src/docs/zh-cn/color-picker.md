## ColorPicker

基于 [pickr](https://github.com/Simonwep/pickr) 改造得颜色选择器。

## 使用

```html
<m-color-picker 
  id='picker' 
  save="0" 
  preview="0" 
  button='0' 
  clear='0' 
  width="300px">
</m-color-picker>

<script>
  var picker = document.querySelector('#picker')
  picker.addEventListener('change', function(evt){
    console.log(evt.detail.color)
  })
</script>
```

## API

### Props

```jsx
{
  button?: boolean;
  preview?: boolean;
  opacity?: boolean;
  hue?: boolean;
  hex?: boolean;
  rgba?: boolean;
  hsla?: boolean;
  hsva?: boolean;
  input?: boolean;
  clear?: boolean;
  save?: boolean;
  cmyk?: boolean;
  default?: string;
  swatches?: string[];
  inline?: boolean;
  strings?: {
      save: string;
      clear: string;
  };
  width?: string;
}
```

### defaultProps

```jsx
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

  default: '#3365B7',

  swatches: [],
  inline: true,

  strings: {
    save: 'Save',  // 保存按钮的文字
    clear: 'Clear' // 清楚按钮的文字
  }
}
```