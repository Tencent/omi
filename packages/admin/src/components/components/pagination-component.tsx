import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/pagination'
import '../docs/admin-docs'
import './code-demo'
import './code-demo/container'

interface Props { }

const tagName = 'pagination-component'
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
          title="分页"
          describe={'基础分页'}
          code={`
\`\`\`jsx
<o-pagination total={25} current-page={0} page-size={5}></o-pagination>
\`\`\`
          `}
        >
          <div slot="demo" class={tw`flex justify-around px-5 py-5`}>

          <o-pagination total={25} current-page={0} page-size={5}></o-pagination>

          </div>
        </code-demo>

      </code-demo-container>
    )
  }
}
