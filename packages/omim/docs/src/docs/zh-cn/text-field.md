## TextField 

用户的输入框，输入一些内容用来提交给服务器。

## 使用

```html
<m-text-field label='Label' helper-text='helper text' ></m-text-field>

<m-text-field
  helper-text='Helper Text'
  icon-right
  path='M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z'
  label='Label2'
  css='
    .mdc-text-field {
      width:200px;
    }
  '
></m-text-field>
```

## Omi 中使用

JSX:

```jsx
<m-text-field label='Label1' helperText='Helper Text' />

<m-text-field
  helperText='Helper Text'
  iconRight
  path='M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z'
  label='Label2'
  css={`
    .mdc-text-field { 
        width:200px;
    }
  `}
/>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| full-width | boolean | -- | 使用父级元素宽度 |
| textarea | boolean | -- | 多行输入，且可鼠标拖拽设置输入框大小 |
| outlined | boolean | -- | 给输入框添加边框 |
| no-label | boolean | -- | 输入框无默认标签 |
| show-helper | boolean | true | 显示帮助文本 |
| helper-text | string | -- | 帮助文本 |
| icon-right | boolean | -- | 图标在右侧 |
| counter | boolean | -- | 记录输入字符个数，配合 min-length, max-length 一起使用 |
| path | string | -- | 图标 path |
| paths | string | -- | 多图标 path |
| label | string | -- | 默认标签 |
| required | boolean | -- | 检测输入框是否为空 |
| pattern | string | -- | 输入值限制及检测 |
| min-length | number | -- | 输入字符最小长度，配合 counter 一起使用 |
| max-length | number | -- | 输入字符最大长度，配合 counter 一起使用 |
| min | number | -- |  |
| max | number | -- |  |
| step | number | -- |  |
| rows | number | -- | 多行输入框高度，数值表示n倍行高 |
| cols | number | -- |  多行输入框宽度，数值表示n个字符宽度 |
| value | string | -- | 默认输入值 |
| disabled | boolean | -- | 输入框失效 |
