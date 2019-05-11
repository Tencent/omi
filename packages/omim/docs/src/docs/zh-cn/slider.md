## Slider

Slider提供了“材质设计”滑块组件的实现。 滑块完全支持RTL，并符合WAI-ARIA滑块创作实践。

## 使用

```jsx
<m-slider onchange='change(event)'> </m-slider>

<m-slider value="10" discrete> </m-slider>

<m-slider disabled > </m-slider>

<m-slider discrete display-markers step="2"> </m-slider>
```

## API

### Props

```jsx
{
  discrete?: boolean,
  value?: number,
  disabled?: boolean,
  displayMarkers?: boolean
}
```