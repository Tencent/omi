import { WeElement, define, h, createRef } from 'omi'
import '../common/index'
import '../../../../../src/space/_example/base'
import '../../../../../src/space/_example/align'
import '../../../../../src/space/_example/break-line'
import '../../../../../src/space/_example/separator'
import '../../../../../src/space/_example/size'
import '../../../../../src/space/_example/vertical'
import * as marked from 'marked'

const docsHTML = marked.parse(`

## API
### Space Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：\`React.CSSProperties\` | N
align | String | - | 对齐方式。可选项：start/end/center/baseline | N
breakLine | Boolean | false | 是否自动换行，仅在 horizontal 时有效	 | N
direction | String | horizontal | 间距方向。可选项：vertical/horizontal | N
separator | TNode | - | 分隔符。TS 类型：\`string \\| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
size | String / Number / Array | 'medium' | 间距大小。TS 类型：\`SpaceSize \\| SpaceSize[]\` \`type SpaceSize = number \\| string \\| SizeEnum\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts)。[详细类型定义]((https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/space/type.ts) | N

`)
interface Props {
  tab: string
}

define(
  'page-space',
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
            <h3 id="基本用法">
              基本用法 <a class="header-anchor" href="#基本用法"></a>
            </h3>
            <p>默认为横向排列，控制相邻组件水平间距。</p>
            <demo-wrapper>
              <space-base></space-base>
            </demo-wrapper>
            <h3 id="垂直间距">
              垂直间距 <a class="header-anchor" href="#垂直间距"></a>
            </h3>
            <p>
              可以设置 <td-code text="direction=vertical"></td-code> 调整为竖向排列。
            </p>
            <demo-wrapper>
              <space-vertical></space-vertical>
            </demo-wrapper>
            <h3 id="间距大小">
              间距大小 <a class="header-anchor" href="#间距大小"></a>
            </h3>
            <p>
              可以通过 <td-code text="size"></td-code> 调整间距大小，自带三个可选值 <td-code text="small"></td-code>、
              <td-code text="medium"></td-code>、<td-code text="large"></td-code>。 也可以自定义设置，设置为数组时参数为{' '}
              <td-code text="[row-gap, column-gap]"></td-code>。
            </p>

            <demo-wrapper>
              <space-size></space-size>
            </demo-wrapper>
            <h3 id="对齐方式">
              对齐方式 <a class="header-anchor" href="#对齐方式"></a>
            </h3>
            <p>
              可以通过 <td-code text="align"></td-code> 设置辅轴对齐方式，效果与 <td-code text="align-items"></td-code>{' '}
              一致。
            </p>

            <demo-wrapper>
              <space-align></space-align>
            </demo-wrapper>
            <h3 id="自动换行">
              自动换行 <a class="header-anchor" href="#自动换行"></a>
            </h3>
            <p>
              可以通过 <td-code text="breakLine"></td-code> 控制是否自动换行，默认不换行。
            </p>
            <demo-wrapper>
              <space-break-line></space-break-line>
            </demo-wrapper>
            <h3 id="设置分隔符">
              设置分隔符 <a class="header-anchor" href="#设置分隔符"></a>
            </h3>
            <p>
              可以通过 <td-code text="separator"></td-code> 设置分隔符。
            </p>
            <demo-wrapper>
              <space-separator></space-separator>
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
