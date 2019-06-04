## Theme 

Super easy to change theme colors, fonts and rounded corners.

## Usage

```js
document.body.style.setProperty('--mdc-theme-primary', 'red')
document.body.style.setProperty('--mdc-theme-secondary', 'blue')
document.body.style.setProperty('--mdc-theme-error', 'yellow')
```

All the config:

```css
--mdc-theme-primary: #0072d9;
--mdc-theme-secondary: #2170b8;
--mdc-theme-error: #f5222d;
--mdc-theme-surface: #ffffff;
--mdc-theme-on-primary: #ffffff;
--mdc-theme-on-secondary: #ffffff;
--mdc-theme-on-error: #ffffff;
--mdc-theme-on-surface: #000000;
--mdc-theme-background: #ffffff;
--mdc-shape-small-component-radius: 4px;
--mdc-shape-medium-component-radius: 4px;
--mdc-shape-large-component-radius: 0px;
--mdc-typography--font-family: Roboto, sans-serif;
```

## Code of REPL

```html
<m-color-picker id='picker' save="0" default="ecb89a" preview="0" button='0' clear='0' width="300px">
</m-color-picker>

<script>
  document.body.style.setProperty('--mdc-theme-primary', '#ecb89a')

  var picker = document.querySelector('#picker')
  picker.addEventListener('change', function (evt) {
    document.body.style.setProperty('--mdc-theme-primary', evt.detail.color)
  })
</script>
```
