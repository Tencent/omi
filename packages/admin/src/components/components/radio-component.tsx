import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'

import '@omiu/radio'

import '../docs/admin-docs'
import './code-demo'
import './code-demo/container'

interface Props { }

const tagName = 'radio-component'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class extends WeElement<Props> {

  static css = [sheet.target, `o-radio{margin-left:10px;}`]

  install() { }

  render() {
    return (
      <code-demo-container>
        <code-demo
          title="单选框"
          describe={'用于在多个选项中选择一个'}
          code={`
\`\`\`jsx
<o-radio name="sex" checked={true} value="0">男</o-radio>
<o-radio name="sex" value="1">女</o-radio>

<o-radio disabled={true} name="sex-b">男</o-radio>
<o-radio disabled={true} name="sex-b">女</o-radio>
\`\`\`
          `}
        >
          <div slot="demo" class={tw`flex justify-around px-5 py-5`}>

          <o-radio name="sex" checked={true} value="0">男</o-radio>
          <o-radio name="sex" value="1">女</o-radio>

          <o-radio disabled={true} name="sex-b">男</o-radio>
          <o-radio disabled={true} name="sex-b">女</o-radio>

          </div>
        </code-demo>

      </code-demo-container>
    )
  }
}
