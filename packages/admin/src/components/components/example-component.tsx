import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '../docs/admin-docs'
import './code-demo'
import './code-demo/container'

// 引入你的组件
// TODO 
// import '@omiu/name'

interface Props {}

// TODO  
const tagName = 'name-component'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class extends WeElement<Props> {
  static css = [sheet.target]
  
  // TODO   
  mdA = 
  `
  \`\`\`html
  <div>example</div>
  \`\`\`
  `
  
  installed() {}

  render() {

    return (
      <code-demo-container>
        <code-demo
          title="例子"
          describe={'不同类型的标签'}
          // TODO
          code={this.mdA}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
              {/* TODO */}
            <div>example</div>
          </div>
        </code-demo>
      </code-demo-container>
    )
  }
}
