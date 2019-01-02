## Menu 

菜单。

## 使用

```js
<o-menu >
  <item icon={{ path: path.pathA, color: '#F2F2F2' }} text='发起群聊'></item>
  <item icon={{ path: path.pathB, color: '#F2F2F2' }} text='添加朋友'></item>
  <item icon={{ path: path.pathC, color: '#F2F2F2' }} text='扫一扫吧'></item>
  <item icon={{ path: path.pathD, color: '#F2F2F2' }} text='收款支付'></item>
</o-menu>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------|
| children         | json array|    --       |  数组项的结构: `<item icon={{ path: 'path string', color: 'any color string' }} text='any text string'></item>`    |　
