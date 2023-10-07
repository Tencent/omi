import { WeElement, define, h, createRef } from 'omi'
import '../common/index'
import '../../../../../src/switch/_example/base'
import '../../../../../src/switch/_example/describe'
import '../../../../../src/switch/_example/status'
import '../../../../../src/switch/_example/size'
import * as marked from 'marked'

const docsHTML = marked.parse(`

## API
### Switch Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
class | String | - | 类名 | N
style | Object | - | 样式，TS 类型：\`React.CSSProperties\` | N
customValue | Array | - | 用于自定义开关的值，[打开时的值，关闭时的值]。默认为 [true, false]。示例：[1, 0]、['open', 'close']。TS 类型：\`Array<SwitchValue>\` | N
disabled | Boolean | - | 是否禁用组件，默认为 false | N
label | TNode | [] | 开关内容，[开启时内容，关闭时内容]。示例：['开', '关'] 或 (value) => value ? '开' : '关'。TS 类型：\`Array<string \\| TNode>  \\| TNode<{ value: SwitchValue }>\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
loading | Boolean | false | 是否处于加载中状态 | N
size | String | medium | 开关尺寸。可选项：small/medium/large | N
value | String / Number / Boolean | - | 开关值。TS 类型：\`T\` \`type SwitchValue = string \| number \| boolean\`。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/switch/type.ts) | N
defaultValue | String / Number / Boolean | - | 开关值。非受控属性。TS 类型：\`T\` \`type SwitchValue = string \\| number \\| boolean\`。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/switch/type.ts) | N
onChange | Function |  | TS 类型：\`(value: T, context: { e: MouseEvent }) => void\`<br/>数据发生变化时触发 | N
`)
interface Props {
  tab: string
}

define(
  'page-switch',
  class extends WeElement<Props> {
    static defaultProps = {
      tab: 'demo',
    }

    tab = ['demo', 'api', 'design']
    tdDocHeader = createRef()
    tdDocTabs = createRef()

    static propTypes = {
      tab: String,
    }

    updateTab = (t: string) => {
      this.updateProps({
        tab: t,
      })
    }

    isShow(tabStr: string) {
      return this.props.tab === tabStr ? { display: 'block' } : { display: 'none' }
    }

    installed() {
      const tdDocTabsEl = this.tdDocTabs.current as HTMLElement
      tdDocTabsEl.onchange = ({ detail: currentTab }: CustomEvent) => {
        this.updateTab(currentTab)
      }
    }

    render() {
      return (
        <>
          <td-doc-tabs ref={this.tdDocTabs} tab={this.props.tab} style="display:block"></td-doc-tabs>
          <div style={this.isShow('demo')} name="DEMO">
            <h3 id="基础开关">
              基础开关 <a class="header-anchor" href="#基础开关"></a>
            </h3>
            <p>不带描述，最基础的开关。</p>
            <demo-wrapper>
              <switch-base></switch-base>
            </demo-wrapper>

            <h3 id="带描述的开关">
              带描述的开关 <a class="header-anchor" href="#带描述的开关"></a>
            </h3>
            <p>
              开关内部带有文字或图标等描述，含义对应开关当前状态，切换时文字同步切换。视觉上更加醒目，用于需要描述当前开关对应状态及含义，更直观且方便用户理解。
            </p>
            <demo-wrapper>
              <switch-describe></switch-describe>
            </demo-wrapper>

            <h3 id="不同状态的开关">
              不同状态的开关 <a class="header-anchor" href="#不同状态的开关"></a>
            </h3>
            <p>提供 normal、loading 和 disabled 3种状态的开关。根据不同场景设置对应状态。</p>
            <demo-wrapper>
              <switch-status></switch-status>
            </demo-wrapper>

            <h3 id="不同大小的开关">
              不同大小的开关 <a class="header-anchor" href="#不同大小的开关"></a>
            </h3>
            <p>提供 大、中（默认）、小 3种开关。</p>
            <demo-wrapper>
              <switch-size></switch-size>
            </demo-wrapper>
          </div>
          <div style={this.isShow('api')} name="API">
            <div
              style="margin-bottom:76px"
              dangerouslySetInnerHTML={{
                __html: docsHTML,
              }}
            ></div>
          </div>
          <div style={this.isShow('design')} name="DESIGN"></div>
        </>
      )
    }
  },
)
