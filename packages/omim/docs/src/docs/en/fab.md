## Fab 

A floating action button represents the primary action in an application.

## Usage

```html
<m-fab ripple icon="favorite_border"></m-fab>

<m-fab ripple mini icon="favorite"></m-fab>

<m-fab
  ripple
  mini
  css=".mdc-fab{
    border-radius: 8px!important;
  }"
  icon="favorite">
</m-fab>
```

## Usage in Omi

JSX:

```jsx
<m-fab ripple icon="favorite_border"></m-fab>

<m-fab ripple mini icon="favorite"></m-fab>

<m-fab
  ripple
  mini
  css={`
    .mdc-fab{
      border-radius: 8px!important;
    }
  `}
  icon="favorite">
</m-fab>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| ripple | boolean | -- | Ripple effect |
| mini | boolean | -- | Micro button |
| icon-right | boolean | -- | Whether the icon is on the right |
| icon | string | -- | Icon content |
