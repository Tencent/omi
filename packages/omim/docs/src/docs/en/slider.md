## Slider

Slider provides an implementation of the Material Design slider component. Sliders are fully RTL-aware, and conform to the WAI-ARIA slider authoring practices.

## Usage

```html
<m-slider onchange='change(event)'> </m-slider>
<m-slider value="10" discrete> </m-slider>
<m-slider disabled > </m-slider>
<m-slider discrete display-markers step="2"> </m-slider>
```

## Used in Omi

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
| discrete | boolean | -- | Coordinate 'display-markers' display markers |
| value | number | 0 | The initial value of the slider |
| disabled | boolean | -- | Disable the slider |
| min | number | 0 | Least value |
| max | number | 100 | Peak value |
| step | number | 1 | Span |
| display-markers | boolean | -- | Coordinate 'discrete' display markers |
| onChange | function | -- | Select the trigger |
