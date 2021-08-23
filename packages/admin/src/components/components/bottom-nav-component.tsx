import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'

import '@omiu/bottom-nav'
import '@omiu/icon/favorite'
import '@omiu/icon/location-on'
import '@omiu/icon/restore'

import '../docs/admin-docs'
import './code-demo'
import './code-demo/container'

interface Props { }

const tagName = 'bottom-nav-component'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class extends WeElement<Props> {

  static css = sheet.target

  install() { }

  render() {
    return (
      <code-demo-container>
        <code-demo
          title="底部导航"
          describe={'移动端底部导航'}
          code={`
\`\`\`jsx
<m-bottom-nav selected-color='#07c160' id='myNav' items={[
  { icon: 'favorite', label: 'Favorites', selected: true },
  { icon: 'location-on', label: 'Nearby' },
  { icon: 'restore', label: 'Recents' }
]}>
</m-bottom-nav>
\`\`\`
          `}
        >
          <div slot="demo" class={tw`flex justify-around px-5 py-5`}>

          <m-bottom-nav selected-color='#07c160' id='myNav' items={[
            { icon: 'favorite', label: 'Favorites', selected: true },
            { icon: 'location-on', label: 'Nearby' },
            { icon: 'restore', label: 'Recents' }
          ]}>
          </m-bottom-nav>

          </div>
        </code-demo>

      </code-demo-container>
    )
  }
}
