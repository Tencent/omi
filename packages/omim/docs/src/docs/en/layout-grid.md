## Layout Grid

Material design’s responsive UI is based on a column-variate grid layout. It has 12 columns on desktop, 8 columns on tablet and 4 columns on phone.

## Usage (Omi in the same way)

```html
<m-layout-grid
  align-right
  style='text-align:center;'
  css='
    .mdc-layout-grid__cell {
      background: rgba(0,0,0,.2);
      height: 100px;
  }'>
  <cell></cell>
  <cell></cell>
  <cell></cell>
</m-layout-grid>
```

Because layout converts HTML strings into vdom, there will be a lot of overhead, so use this component in jsx, and use only its CSS in html.

```js
import { css } from '@omim/core/layout-grid'
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| align-right | boolean | -- | Align right |
| align-left | boolean | -- | Align left |
