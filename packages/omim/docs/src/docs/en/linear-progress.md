## Linear Progress

Linear Progress component is a spec-aligned linear progress indicator component adhering to the Material Design progress & activity requirements.

## Usage

```html
<m-linear-progress value='0.3' buffer='0.5'></m-linear-progress>
<m-linear-progress value='0.1'> </m-linear-progress>
<m-linear-progress indeterminate > </m-linear-progress>
<m-linear-progress reversed value="0.2"> </m-linear-progress>
```

## Used in Omi

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
| buffer | number | 1 | Buffer progress value |
| value | number | 0 | The main progress values |
| indeterminate | boolean | -- | Animation of unknown progress |
| reversed | boolean | -- | Negative direction progress |
