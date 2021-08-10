import { define, WeElement, h } from 'omi'

const hyphenateRE = /\B([A-Z])/g
const hyphenate = function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
}

export default function createSvgIcon(path, displayName) {

  define(hyphenate('OIcon' + displayName), class extends WeElement {

    static css = `:host {
  fill: currentColor;
  width: 1em;
  height: 1em;
  display: inline-block;
  vertical-align: -0.125em;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  user-select: none;
}`

    render() {
      return h('svg', {
        viewBox: '0 0 24 24',
      }, path)
    }
  })
}
