## Paper

The physical properties of the paper are displayed on the screen.

## Usage

```html
<m-paper elevation='1' square='true'>
  <h3>This is a sheet of paper.</h3>
  <p>Paper can be used to build surface or other elements for your </p>
</m-paper>
```

## Usage in Omi

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
| elevation | number | 1 | Shadow depth, corresponds to dp in the spec. It accepts values between 0 and 24 inclusive. |
| square | boolean | false | If true, rounded corners are disabled. |
