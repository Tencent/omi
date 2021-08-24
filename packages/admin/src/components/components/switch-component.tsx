import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/switch'
import '../docs/admin-docs'
import './code-demo'
import './code-demo/container'

interface Props { }

const tagName = 'switch-component'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class extends WeElement<Props> {

  static css = [sheet.target, `o-switch{margin-left:10px;}`]

  install() { }

  render() {
    return (
      <code-demo-container>
        <code-demo
          title="开关按钮"
          describe={'基础演示'}
          code={`
\`\`\`jsx
<o-switch id="switchA" checked="0">
</o-switch>

<o-switch id="switchB" checked>
</o-switch>
\`\`\`
          `}
        >
          <div slot="demo" class={tw`flex justify-around px-5 py-5`}>

          <o-switch id="switchA" checked={false}>
          </o-switch>

          <o-switch id="switchB" checked>
          </o-switch>

          </div>
        </code-demo>

      </code-demo-container>
    )
  }
}
