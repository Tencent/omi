import { create, cssomSheet } from 'twind'
import * as colors from 'twind/colors'

const sheet = cssomSheet({ target: new CSSStyleSheet() })
const { tw } = create({
  sheet,
  theme: { extend: { colors } },
  darkMode: 'class'
})

export {
  sheet,
  tw
}
