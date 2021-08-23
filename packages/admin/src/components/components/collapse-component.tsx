import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/button'
import '@omiu/collapse'

import '../docs/admin-docs'
import './code-demo'
import './code-demo/container'

interface Props { }

const tagName = 'collapse-component'
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

  openedA = false
  openedB = false
  openedC = false


  render() {
    // const gridItem = tw`px-2 w-full md:w-6/12`
    const gridStyle = { breakInside: 'avoid', padding: '0 0 0 0' }

    return (
      <code-demo-container>


        <code-demo
          title="折叠"
          describe={'基础折叠'}
          code={`
\`\`\`jsx
<o-collapse
  opened={this.openedA}
  >
  <div>
    <p>一季度生产原材料采购项目 开票成功!</p>
    <p>二季度生产原材料采购项目 开票成功!</p>
    <p>三季度生产原材料采购项目 开票成功！</p>
  </div>
</o-collapse>
\`\`\`
          `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-button size="mini" onClick={() => {
              this.openedA = !this.openedA
              this.update()
            }}>toggle</o-button>
            <o-collapse
              opened={this.openedA}
            >
              <div>
                <p>一季度生产原材料采购项目 开票成功!</p>
                <p>二季度生产原材料采购项目 开票成功!</p>
                <p>三季度生产原材料采购项目 开票成功！</p>
              </div>
            </o-collapse>
          </div>
        </code-demo>



        <code-demo
          title="横向折叠"
          describe={'通过 horizontal 设置'}
          code={`
\`\`\`jsx
<o-collapse
  horizontal
  opened={this.openedB}
  >
  <div style="max-height:70px;overflow:auto;">
    <p>一季度生产原材料采购项目 开票成功!</p>
    <p>二季度生产原材料采购项目 开票成功!</p>
    <p>三季度生产原材料采购项目 开票成功！</p>
  </div>
</o-collapse>
\`\`\`
          `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-button size="mini" onClick={() => {
              this.openedB = !this.openedB
              this.update()
            }}>toggle</o-button>
            <o-collapse
              horizontal
              opened={this.openedB}
            >
              <div style="max-height:70px;overflow:auto;">
                <p>一季度生产原材料采购项目 开票成功!</p>
                <p>二季度生产原材料采购项目 开票成功!</p>
                <p>三季度生产原材料采购项目 开票成功！</p>
              </div>

            </o-collapse>
          </div>
        </code-demo>


        <code-demo
          title="无动画折叠"
          describe={'通过 noAnimation 控制'}
          code={`
\`\`\`jsx
<o-collapse
  noAnimation
  opened={this.openedC}
  >
  <div>
    <p>一季度生产原材料采购项目 开票成功!</p>
    <p>二季度生产原材料采购项目 开票成功!</p>
    <p>三季度生产原材料采购项目 开票成功！</p>
  </div>
</o-collapse>
\`\`\`
          `}
          style={gridStyle}
        >
          <div slot="demo" class={tw`px-5 py-5`}>
            <o-button size="mini" onClick={() => {
              this.openedC = !this.openedC
              this.update()
            }}>toggle</o-button>
            <o-collapse
              noAnimation
              opened={this.openedC}
            >
              <div>
                <p>一季度生产原材料采购项目 开票成功!</p>
                <p>二季度生产原材料采购项目 开票成功!</p>
                <p>三季度生产原材料采购项目 开票成功！</p>
              </div>

            </o-collapse>
          </div>
        </code-demo>


      </code-demo-container>
    )
  }
}
