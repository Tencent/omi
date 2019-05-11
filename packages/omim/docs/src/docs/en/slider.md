## Slider

Slider provides an implementation of the Material Design slider component. Sliders are fully RTL-aware, and conform to the WAI-ARIA slider authoring practices.

## Usage

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