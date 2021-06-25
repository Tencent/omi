import { create, cssomSheet } from 'twind'
const sheet = cssomSheet({ target: new CSSStyleSheet() })
const { tw } = create({ sheet })

export {
    sheet,
    tw
}