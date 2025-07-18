import { css, globalCSS } from 'omi'
import './tailwind.css'
import tailwindStyle from './tailwind.css?inline'

export const tailwind = css`
  ${tailwindStyle}
`

globalCSS(tailwind)
