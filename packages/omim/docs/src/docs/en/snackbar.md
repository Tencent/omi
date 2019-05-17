## Snackbar 

Snackbar provide brief messages about app processes at the bottom of the screen.

## Usage

```html
<m-snackbar id='snackbar1' button-text="RETRY" msg="Can't send photo. Retry in 5 seconds."></m-snackbar>
```

## API

### Props

```jsx
{
  show?: boolean,
  stacked?: boolean,
  msg: string,
  buttonText?: string,
  leading?: boolean
}
```