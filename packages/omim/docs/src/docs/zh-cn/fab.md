## Fab 

浮动操作按钮表示应用程序中的主要操作。

## 使用

```html
<m-fab ripple icon="favorite_border"></m-fab>

<m-fab ripple mini icon="favorite"></m-fab>

<m-fab
  ripple
  mini
  css=".mdc-fab{
    border-radius: 8px!important;
  }"
  icon="favorite">
</m-fab>
```

## Omi 中使用

JSX:

```jsx
<m-fab ripple icon="favorite_border"></m-fab>

<m-fab ripple mini icon="favorite"></m-fab>

<m-fab
  ripple
  mini
  css={`
    .mdc-fab{
      border-radius: 8px!important;
    }
  `}
  icon="favorite">
</m-fab>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| ripple | boolean | -- | 波纹效果 |
| mini | boolean | -- | 小按钮 |
| icon-right | boolean | -- | 图标是否在右边 |
| icon | string | -- | 图标内容 |
