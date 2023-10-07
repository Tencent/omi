import { WeElement, define, h, createRef } from 'omi'
import '../common/index'
import '../../../../../src/progress/_example/circle'
import '../../../../../src/progress/_example/line'

import * as marked from 'marked'

const docsHTML = marked.parse(`
## API
### Progress Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：\`React.CSSProperties\` | N
color | String / Object / Array | '' | 进度条颜色。示例：'#ED7B2F' 或 'orange' 或 \`['#f00', '#0ff', '#f0f']\` 或 \`{ '0%': '#f00', '100%': '#0ff' }\` 或  \`{ from: '#000', to: '#000' }\` 等。TS 类型：\`string \\| Array<string> \\| Record<string, string>\` | N
label | TNode | true | 进度百分比，可自定义。TS 类型：\`string \| boolean \| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
percentage | Number | 0 | 进度条百分比 | N
size | String / Number | 'medium' | 进度条尺寸，示例：small/medium/large/240。small 值为 72； medium 值为 112；large 值为 160 | N
status | String | - | 进度条状态。可选项：success/error/warning/active。TS 类型：\`StatusEnum\` \`type StatusEnum = 'success' \\| 'error' \\| 'warning' \\| 'active'\`。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/progress/type.ts) | N
strokeWidth | String / Number | - | 进度条线宽。宽度数值不能超过 size 的一半，否则不能输出环形进度 | N
theme | String | line | 进度条风格。值为 line，标签（label）显示在进度条右侧；值为 plump，标签（label）显示在进度条里面；值为 circle，标签（label）显示在进度条正中间。可选项：line/plump/circle。TS 类型：\`ThemeEnum\` \`type ThemeEnum = 'line' \\| 'plump' \\| 'circle'\`。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/progress/type.ts) | N
trackColor | String | '' | 进度条未完成部分颜色 | N`)

interface Props {
  tab: string
}

define(
  'page-progress',
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
            <h3 id="线形进度条">
              线形进度条 <a href="#线形进度条" class="header-anchor"></a>
            </h3>
            <p>以线形表示进度的组件，可以选择性地配有文字或图标补充显示进度和状态。多用于信息量较为丰富的情况。</p>
            <demo-wrapper>
              <progress-line></progress-line>
            </demo-wrapper>

            <h3 id="环形进度条">
              环形进度条 <a href="#环形进度条" class="header-anchor"></a>
            </h3>
            <p>
              以线形表示进度的组件，环内可选择性地配有文字或图标补充显示进度和状态。多用于需要强调进度百分比的情况。
            </p>
            <demo-wrapper>
              <progress-circle></progress-circle>
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
