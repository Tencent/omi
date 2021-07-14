import { Color } from './color'

theme()

document.addEventListener('DOMContentLoaded', () => {
  theme()
})

function theme() {
  if (document.body && !document.body.style.getPropertyValue('--o-primary')) {
    setTheme('primary', '#07c160')
    setTheme('danger', '#fa5151')
    setTheme('surface', '#ffffff')
    setTheme('on-primary', '#ffffff')
    setTheme('on-danger', '#ffffff')
    setTheme('on-surface', '#000000')
    setTheme('background', '#ffffff')
    setTheme('small-radius', '4px')
    setTheme('medium-radius', '4px')
    setTheme('large-radius', '0px')
    setTheme('font-family', '-apple-system-font,"Helvetica Neue",sans-serif')
  }
}

export function setTheme(key, value) {
  const style = document.body.style

  style.setProperty('--o-' + key, value)

  if (key === 'primary' || key === 'danger') {
    style.setProperty(`--o-${key}-fade-little`, Color(value).fade(0.382))
    style.setProperty(`--o-${key}-fade-some`, Color(value).fade(0.618))
    style.setProperty(`--o-${key}-fade-more`, Color(value).fade(0.759))
    style.setProperty(`--o-${key}-fade-lot`, Color(value).fade(0.9))
    style.setProperty(`--o-${key}-active`, Color(value).darken(0.1))

  }
}

export function setThemePrimary(color) {
  setTheme('primary', color)
}

export default {
  setTheme,
  setThemePrimary
}

if (typeof window !== undefined) {
  //@ts-ignore
  window.Omiu = {
    setTheme,
    setThemePrimary
  }
}
