import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'

import '@omiu/input'
import '@omiu/icon/ac-unit-outlined'

import '../docs/admin-docs'
import './code-demo'
import './code-demo/container'

interface Props { }

const tagName = 'input-component'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class extends WeElement<Props> {

  static css = [sheet.target, `o-input{margin-top:10px;}`]

  install() { }

  render() {
    return (
      <code-demo-container>
        <code-demo
          title="基础输入框"
          describe={'一般用于输入信息提交给服务器'}
          code={`
\`\`\`jsx
<o-input placeholder="Enter User Name"></o-input>
<o-input disabled placeholder="Enter User Name"></o-input>
<o-input clearable placeholder="Enter User Name"></o-input>
\`\`\`
          `}
        >
          <div slot="demo" class={tw`flex flex-col justify-center px-5 py-5`}>

          <div>
            <o-input placeholder="Enter User Name"></o-input>
          </div>

          <div>
            <o-input disabled placeholder="Enter User Name"></o-input>
          </div>

          <div>
            <o-input clearable placeholder="Enter User Name"></o-input>
          </div>

          </div>
        </code-demo>

        <code-demo
          title="扩展输入框"
          describe={'设置 后缀 前缀'}
          code={`
\`\`\`jsx
<o-input max-length="10"  placeholder="Enter User Name"></o-input>
<o-input size="medium" suffix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>
<o-input size="small" suffix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>
<o-input size="mini" suffix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>

<o-input size="medium" prefix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>
<o-input size="small" prefix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>
<o-input size="mini" prefix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>
\`\`\`
          `}
        >
          <div slot="demo" class={tw`flex flex-col px-5 py-5`}>

          <div>
            <o-input max-length="10"  placeholder="Enter User Name"></o-input>
          </div>

          <div>
            <o-input size="medium" suffix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>
          </div>

          <div>
            <o-input size="small" suffix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>
          </div>

          <div>
            <o-input size="mini" suffix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>
          </div>

          <div>
            <o-input size="medium" prefix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>
          </div>

          <div>
            <o-input size="small" prefix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>
          </div>

          <div>
            <o-input size="mini" prefix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>
          </div>

          </div>
        </code-demo>

      </code-demo-container>
    )
  }
}
