## Layout Grid

Material design’s responsive UI is based on a column-variate grid layout. It has 12 columns on desktop, 8 columns on tablet and 4 columns on phone.

## Usage

```jsx
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

## API

### Props

```jsx
{
  align-right: boolean,
  align-left: boolean
}
```