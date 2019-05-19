## Linear Progress

线性进度组件是符合材料设计进度和活动要求的规范对齐线性进度指示器组件。

## 使用

```html
<m-linear-progress value='0.3' buffer='0.5'></m-linear-progress>
<m-linear-progress value='0.1'> </m-linear-progress>
<m-linear-progress indeterminate > </m-linear-progress>
<m-linear-progress reversed value="0.2"> </m-linear-progress>
```

## Omi 中使用

JSX:

```jsx
<m-linear-progress value={0.1}  buffer={0.5}> </m-linear-progress>
<m-linear-progress value={0.2}  > </m-linear-progress>
<m-linear-progress indeterminate > </m-linear-progress>
<m-linear-progress reversed value={0.3}> </m-linear-progress>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| buffer | number | -- | 缓冲区进度值 |
| value | number | -- | 主进度值 |
| indeterminate | boolean | -- | 未知进度动画 |
| reversed | boolean | -- | 反方向进度 |
