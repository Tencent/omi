## Linear Progress

Linear Progress component is a spec-aligned linear progress indicator component adhering to the Material Design progress & activity requirements.

## Usage

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