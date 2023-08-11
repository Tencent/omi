import { TinyColor } from '@ctrl/tinycolor'

const cssVarMap = {
  primary: '#07c160',
  danger: '#fa5151',

  surface: '#ffffff',
  'on-primary': '#ffffff',
  'on-danger': '#ffffff',
  'on-surface': '#000000',
  background: '#ffffff',
  'small-radius': '4px',
  'medium-radius': '4px',
  'large-radius': '0px',
  'font-family': '-apple-system-font,"Helvetica Neue",sans-serif'
}

theme()

document.addEventListener('DOMContentLoaded', () => {
  theme()
})

function theme() {
  if (document.body && !document.body.style.getPropertyValue('--o-primary')) {
    for (const key in cssVarMap) {
      setCssVar(key, cssVarMap[key])
    }

    setTheme('primary', cssVarMap['primary'])
    setTheme('danger', cssVarMap['danger'])
  }
}

function getFadedColor(color: TinyColor, fade: number) {
  const alpha = color.getAlpha()
  color.setAlpha(alpha * (1 - fade))
  return color.toString()
}

function setCssVar(key: string, value: string) {
  const style = document.body.style
  style.setProperty('--o-' + key, value)
}

/**
 * 设置主题色相关
 * @param key
 * @param value
 */
export function setTheme(key: string, value: string) {
  const style = document.body.style

  const fadeMap = {
    little: 0.382,
    some: 0.618,
    more: 0.759,
    lot: 0.9
  }

  const color = new TinyColor(value)
  for (const type in fadeMap) {
    style.setProperty(
      `--o-${key}-fade-${type}`,
      getFadedColor(color, fadeMap[type])
    )
  }
  style.setProperty(`--o-${key}-active`, color.darken(10).toString())
}

/**
 * 设置主色调
 * @param color
 */
export function setThemePrimary(color: string) {
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
