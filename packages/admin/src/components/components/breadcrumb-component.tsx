import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'

import '@omiu/breadcrumb'
import '@omiu/icon/help'
import '@omiu/icon/people'
import '../docs/admin-docs'
import './code-demo'
import './code-demo/container'

interface Props { }

const tagName = 'breadcrumb-component'
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
          title="面包屑"
          describe={'显示当前页面在系统层级结构中的位置，并能导航'}
          code={`
\`\`\`jsx
<o-breadcrumb split="/" items={[
  { text: 'Home' },
  { text: 'Helper' },
  { text: 'About' }
]}></o-breadcrumb>


<o-breadcrumb split="/" items={[
  { text: 'Home', href:'https://tencent.github.io/omi/', icon:'home' },
  { text: 'Helper', icon:'help' },
  { text: 'About', icon: 'people' }
]}></o-breadcrumb>
\`\`\`
          `}
        >
          <div slot="demo" class={tw`flex justify-around px-5 py-5`}>

          <o-breadcrumb split="/" items={[
            { text: 'Home' },
            { text: 'Helper' },
            { text: 'About' }
          ]}></o-breadcrumb>


          <o-breadcrumb split="/" items={[
            { text: 'Home', href:'https://tencent.github.io/omi/', icon:'home' },
            { text: 'Helper', icon:'help' },
            { text: 'About', icon: 'people' }
          ]}></o-breadcrumb>

          </div>
        </code-demo>

      </code-demo-container>
    )
  }
}
