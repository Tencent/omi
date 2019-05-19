## Slider

Slider提供了“材质设计”滑块组件的实现。 滑块完全支持RTL，并符合WAI-ARIA滑块创作实践。

## 使用

```html
<m-slider onchange='change(event)'> </m-slider>
<m-slider value="10" discrete> </m-slider>
<m-slider disabled > </m-slider>
<m-slider discrete display-markers step="2"> </m-slider>
```

## Omi 中使用

JSX:

```jsx
<m-slider onChange={(evt) => {
  console.log(evt.detail.value)
}}> </m-slider>
<m-slider value={10} onChange={(evt) => {
  console.log(evt.detail.value)
}} discrete> </m-slider>
<m-slider disabled > </m-slider>
<m-slider discrete displayMarkers step={2}> </m-slider>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| discrete | boolean | -- | 与 display-markers 一起使用显示标记 |
| value | number | 0 | 滑块初始值 |
| disabled | boolean | -- | 禁用滑块 |
| min | number | 0 | 最小值 |
| max | number | 100 | 最大值 |
| step | number | 1 | 跨度 |
| display-markers | boolean | -- | 与 discrete 一起使用显示标记 |
| onChange | function | -- | 选择触发 |
