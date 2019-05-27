## Theme 

Super easy to change theme colors, fonts and rounded corners.

## Usage

### Change Theme Color

```js
window.OmimThemePrimary =  'red'
window.OmimThemeSecondary =  'blue'
window.OmimThemeError =  'yellow'

import '@omim/core/button'
```

or

```html
<m-button>I am button</m-button>

<script src="https://unpkg.com/omi"></script>
<script>
  window.OmimThemePrimary =  'red'
  window.OmimThemeSecondary =  'blue'
  window.OmimThemeError =  'yellow'
</script>
<script src="https://unpkg.com/@omim/core@latest/button/index.js"></script>
```

### Change the theme at runtime

```js
window.OmimThemePrimary = '#ecb89a'
window.OmimThemeSecondary =  'blue'
MButton.resetTheme()
MSwitch.resetTheme()
```

[→ Click here for more configurations](https://github.com/Tencent/omi/blob/master/packages/omim/src/theme.ts)