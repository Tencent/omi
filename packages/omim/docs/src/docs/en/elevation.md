## Elevation

Shadows provide important visual cues about objects’ depth and directional movement. They are the only visual cue indicating the amount of separation between surfaces. An object’s elevation determines the appearance of its shadow. The elevation values are mapped out in a “z-space” and range from 0 to 24.

## Usage

```html
<m-elevation
  css=".mdc-elevation {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }"
  class="elevation-demo-surface"
  z="1"
>1dp</m-elevation>
```

## Usage in Omi

JSX:

```jsx
<m-elevation
  css={`
    .mdc-elevation {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}
  class="elevation-demo-surface"
  z="1"
>1dp</m-elevation>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| z | number | -- | Shadow appearance control |
