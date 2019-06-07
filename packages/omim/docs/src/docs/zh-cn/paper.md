## Paper

在屏幕上展现纸张的物理属性。

## 使用

```html
<m-paper elevation='1' square='true'>
  <h3>This is a sheet of paper.</h3>
  <p>Paper can be used to build surface or other elements for your </p>
</m-paper>
```

## Omi 中使用

JSX:

```jsx
<m-paper elevation={1} square={true}>
  <h3>This is a sheet of paper.</h3>
  <p>Paper can be used to build surface or other elements for your </p>
</m-paper>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| elevation | number | 1 | 阴影深度，对应dp于规范。它接受0到24之间的值。 |
| square | boolean | false | 如果true，圆角被禁用。 |
