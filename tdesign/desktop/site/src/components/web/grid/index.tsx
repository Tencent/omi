import { WeElement, define, h, createRef } from 'omi'
import '../common/index'
import '../../../../../src/grid/_example/base'
import '../../../../../src/grid/_example/flex'
import '../../../../../src/grid/_example/gutter'
import '../../../../../src/grid/_example/halign'
import '../../../../../src/grid/_example/offset'
import '../../../../../src/grid/_example/responsive'
import '../../../../../src/grid/_example/sort'
import '../../../../../src/grid/_example/valign'
import * as marked from 'marked'

const docsHTML = marked.parse(`
## API
### Row Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：\`React.CSSProperties\` | N
align | String | top | 纵向对齐方式，CSS 属性 \`align-items\` 值。其中 \`top\` 和 \`start\` 等效；\`middle\` 和 \`center\` 等效；\`bottom\` 和 \`end\` 等效。可选项：start/end/center/stretch/baseline/top/middle/bottom | N
gutter | Number / Object / Array | 0 | 栅格间隔，示例：\`{ xs: 8, sm: 16, md: 24}\`。当数据类型为 Number 和 Object 时，用于指定横向间隔。当数据类型为数组时，第一个参数为横向间隔，第二个参数为纵向间隔， [水平间隔, 垂直间隔]。TS 类型：\`number \|  GutterObject \| Array<GutterObject \| number>\` \`interface GutterObject { xs: number; sm: number; md: number } \`。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/grid/type.ts) | N
justify | String | start | flex 布局下的水平排列方式。可选项：start/end/center/space-around/space-between | N
tag | String | div | 自定义元素标签 | N

### Col Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：\`React.CSSProperties\` | N
flex | String / Number | - | flex 布局填充。CSS 属性 flex 值。示例：2 / 3 / '100px' / 'auto' / '1 1 200px' | N
lg | Number / Object | - | ≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象（小尺寸电脑）。TS 类型：\`number \| BaseColProps\` | N
md | Number / Object | - | ≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象（超小尺寸电脑）。TS 类型：\`number \| BaseColProps\` | N
offset | Number | 0 | 栅格左侧的间隔格数，间隔内不可以有栅格 | N
order | Number | 0 | 栅格顺序，flex 布局模式下有效 | N
pull | Number | 0 | 栅格向左移动格数 | N
push | Number | 0 | 栅格向右移动格数 | N
sm | Number / Object | - | ≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象（平板）。TS 类型：\`number \| BaseColProps\` | N
span | Number | - | 栅格占位格数，为 0 时相当于 display: none | N
tag | String | div | 自定义元素标签 | N
xl | Number / Object | - | ≥1400px 响应式栅格，可为栅格数或一个包含其他属性的对象（中尺寸电脑）。TS 类型：\`number \| BaseColProps\` | N
xs | Number / Object | - | <768px 响应式栅格，可为栅格数或一个包含其他属性的对象（手机）。TS 类型：\`number \| BaseColProps\` \`interface BaseColProps { offset: number; order: number; pull: number; push: number; span: number }\`。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/grid/type.ts) | N
xxl | Number / Object | - | ≥1880px 响应式栅格，可为栅格数或一个包含其他属性的对象（大尺寸电脑）。TS 类型：\`number \| BaseColProps\` | N

`)
interface Props {
  tab: string
}

define(
  'page-grid',
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
            <h3 id="基本使用">
              基本使用 <a class="header-anchor" href="#基本使用"></a>
            </h3>
            <demo-wrapper>
              <grid-base></grid-base>
            </demo-wrapper>
            <h3 id="区块间隔">
              区块间隔 <a class="header-anchor" href="#区块间隔"></a>
            </h3>
            <demo-wrapper>
              <grid-gutter></grid-gutter>
            </demo-wrapper>
            <h3 id="左右偏移">
              左右偏移 <a class="header-anchor" href="#左右偏移"></a>
            </h3>
            <demo-wrapper>
              <grid-offset></grid-offset>
            </demo-wrapper>
            <h3 id="排序">
              排序 <a class="header-anchor" href="#排序"></a>
            </h3>
            <demo-wrapper>
              <grid-sort></grid-sort>
            </demo-wrapper>
            <h3 id="次序">
              次序 <a class="header-anchor" href="#次序"></a>
            </h3>
            <demo-wrapper>
              <grid-order></grid-order>
            </demo-wrapper>
            <h3 id="排版">
              排版 <a class="header-anchor" href="#排版"></a>
            </h3>
            <demo-wrapper>
              <grid-halign></grid-halign>
            </demo-wrapper>
            <h3 id="对齐">
              对齐 <a class="header-anchor" href="#对齐"></a>
            </h3>
            <demo-wrapper>
              <grid-valign></grid-valign>
            </demo-wrapper>
            <h3 id="flex">
              flex <a class="header-anchor" href="#flex"></a>
            </h3>
            <demo-wrapper>
              <grid-flex></grid-flex>
            </demo-wrapper>
            <h3 id="响应式布局">
              响应式布局 <a class="header-anchor" href="#响应式布局"></a>
            </h3>
            <demo-wrapper>
              <grid-responsive></grid-responsive>
            </demo-wrapper>
          </div>
          <div style={this.isShow('api')} name="API">
            <div
              style="margin-bottom:76px"
              unsafeHTML={{
                html: docsHTML,
              }}
            ></div>
          </div>
          <div style={this.isShow('design')} name="DESIGN"></div>
        </>
      )
    }
  },
)
