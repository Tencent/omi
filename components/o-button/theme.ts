import * as Color from 'color'

theme()

document.addEventListener('DOMContentLoaded', () => {
  theme()
})

function theme() {
  if (document.body && !document.body.style.getPropertyValue('--o-primary')) {
    setTheme('primary', '#07c160')
    setTheme('error', '#f5222d')
    setTheme('surface', '#ffffff')
    setTheme('on-primary', '#ffffff')
    setTheme('on-error', '#ffffff')
    setTheme('on-surface', '#000000')
    setTheme('background', '#ffffff')
    setTheme('small-radius', '4px')
    setTheme('medium-radius', '4px')
    setTheme('large-radius', '0px')
    setTheme('font-family', '-apple-system-font,"Helvetica Neue",sans-serif')
  }
}

function setTheme(key, value) {
  const style = document.body.style

  style.setProperty('--o-' + key, value)
  switch (key) {
    case 'primary':
      style.setProperty('--o-primary-hover', Color(value).fade(0.382))
      style.setProperty('--o-primary-active', Color(value).darken(0.1))
      break
    case 'error':
      style.setProperty('--o-error-hover', Color(value).fade(0.382))
      style.setProperty('--o-error-active', Color(value).darken(0.1))
      break

  }
}


if (typeof window !== undefined) {
  //@ts-ignore
  window.Omiu = {
    setTheme: setTheme,
    setThemePrimary: function (color) {
      setTheme('primary', color)
    },
    setThemeError: function (color) {
      setTheme('error', color)
    }
  }
}
