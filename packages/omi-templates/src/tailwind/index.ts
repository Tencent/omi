import { css, globalCSS } from 'omi'
import './tailwind.css'
import '../assets/icon-font.css'
import tailwindStyle from './tailwind.css?inline'
import icon from '../assets/icon-font.css?inline'

export const tailwind = css`
  ${tailwindStyle}
  ${icon}
`

globalCSS(tailwind)
