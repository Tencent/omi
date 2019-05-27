## Theme 

超级容易更换主题颜色、字体和圆角。

## 使用

### 更改主题颜色

```js
window.OmimThemePrimary =  'red'
window.OmimThemeSecondary =  'blue'
window.OmimThemeError =  'yellow'

import '@omim/core/button'
```

或者

```html
<m-button>I am button</m-button>

<script src="https://unpkg.com/omi"></script>
<script>
  window.OmimThemePrimary =  'red'
  window.OmimThemeSecondary =  'blue'
  window.OmimThemeError =  'yellow'
</script>
<script src="https://unpkg.com/@omim/core@latest/button/index.js"></script>
```

### 运行时更改主题

```js
window.OmimThemePrimary = '#ecb89a'
window.OmimThemeSecondary =  'blue'
MButton.resetTheme()
MSwitch.resetTheme()
```

[→ 点击查看更多配置](https://github.com/Tencent/omi/blob/master/packages/omim/src/theme.ts)