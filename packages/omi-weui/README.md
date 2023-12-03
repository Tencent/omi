## omi-weui

OMI 版本 WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。


## 安装

```bash
npm i omi-weui
```

## 使用

```tsx
import { WeButton } from 'omi-weui'
WeButton.define('we-button')
```

在各个框架中使用:

```tsx
<we-button type="warn">按钮</we-button>  // omi
<we-button size="mini">按钮</we-button> // vue
<we-button type="default">按钮</we-button> // react
<we-button loading>按钮</we-button> // html
```
或者直接:

```tsx
const btn = document.createElement('we-button')
btn.innerText = '按钮'
document.body.appendChild(btn)
```



## License

MIT © OMI
