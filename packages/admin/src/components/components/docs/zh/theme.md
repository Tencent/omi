## 自定义主题 

Omiu 支持运行时动态主题切换。


## 安装

```js
import '@omiu/common'
```

或者直接 script 标签引入。


```html
<script src="https://unpkg.com/@omiu/common"></script>
```

## 更改主题

```js
const setTheme = Omiu.setTheme

setTheme('primary', '#07c160')
setTheme('danger', '#f5222d')
setTheme('surface', '#ffffff')
setTheme('on-primary', '#ffffff')
setTheme('on-danger', '#ffffff')
setTheme('on-surface', '#000000')
setTheme('background', '#ffffff')
setTheme('small-radius', '4px')
setTheme('medium-radius', '4px')
setTheme('large-radius', '0px')
setTheme('font-family', '-apple-system-font,"Helvetica Neue",sans-serif')
```

或者

```js
Omiu.setThemePrimary('green')
```


