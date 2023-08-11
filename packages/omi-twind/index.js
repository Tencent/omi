import { create, cssomSheet } from 'twind'
import * as colors from 'twind/colors'

const sheet = cssomSheet({ target: new CSSStyleSheet() })
const { tw } = create({
  sheet,
  theme: { extend: { colors } },
  darkMode: ['class','[theme-mode="dark"]']
})

export {
  sheet,
  tw
}
