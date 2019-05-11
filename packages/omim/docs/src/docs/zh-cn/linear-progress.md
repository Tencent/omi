## Linear Progress

线性进度组件是符合材料设计进度和活动要求的规范对齐线性进度指示器组件。

## 使用

```jsx
<m-linear-progress value='0.3' buffer='0.1'></m-linear-progress>

<m-linear-progress value='0.1'> </m-linear-progress>

<m-linear-progress indeterminate > </m-linear-progress>

<m-linear-progress reversed value="0.2"> </m-linear-progress>
```

## API

### Props

```jsx
{
  buffer?: number,
  value?: number,
  indeterminate: boolean,
  reversed: boolean
}
```