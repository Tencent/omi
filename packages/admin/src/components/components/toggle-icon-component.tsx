import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'

import '@omiu/toggle-icon'
import '@omiu/icon/favorite'
import '@omiu/icon/favorite-border'

import '../docs/admin-docs'
import './code-demo'
import './code-demo/container'

interface Props { }

const tagName = 'toggle-icon-component'
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
          title="可切换图标"
          describe={'拥有两种状态切换的icon'}
          code={`
\`\`\`jsx
<o-toggle-icon icons={['favorite-border','favorite']}></o-toggle-icon>
<o-toggle-icon is-on color="red" icons={['favorite-border','favorite']}></o-toggle-icon>
<o-toggle-icon disabled icons={['favorite', 'favorite-border']}></o-toggle-icon>
\`\`\`
          `}
        >
          <div slot="demo" class={tw`flex justify-around px-5 py-5`}>

          <o-toggle-icon icons={['favorite-border','favorite']}></o-toggle-icon>
          <o-toggle-icon is-on color="red" icons={['favorite-border','favorite']}></o-toggle-icon>
          <o-toggle-icon disabled icons={['favorite', 'favorite-border']}></o-toggle-icon>

          </div>
        </code-demo>

      </code-demo-container>

    )
  }
}
