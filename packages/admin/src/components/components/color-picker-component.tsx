import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/color-picker'
import '../docs/admin-docs'
import './code-demo'
import './code-demo/container'

interface Props { }

const tagName = 'color-picker-component'
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
          title="颜色选择器"
          describe={'可自定义RGB色彩'}
          code={`
\`\`\`jsx
<o-color-picker id='picker' clear={0} inline={0} width="350px">
</o-color-picker>
\`\`\`
          `}
        >
          <div slot="demo" class={tw`flex justify-center px-5 py-5`}>

          <div class={tw`mr-10`}>点击打开调色盘</div>
          <div>
            <o-color-picker id='picker' clear={0} inline={0} width="350px">
            </o-color-picker>
          </div>   

          </div>
        </code-demo>

      </code-demo-container>
    )
  }
}
