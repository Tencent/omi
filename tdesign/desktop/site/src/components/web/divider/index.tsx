import { WeElement, define, h, createRef } from 'omi'
import '../common/index'
import '../../../../../src/divider/_example/base'
import '../../../../../src/divider/_example/text'
import '../../../../../src/divider/_example/vertical'
import * as marked from 'marked'

const docsHTML = marked.parse(`

## API
### Divider Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，Typescript：\`React.CSSProperties\` | N
align | String | center | options：left/right/center | N
children | TNode | - | Typescript：\`string \\|  TNode\`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
content | TNode | - | Typescript：\`string \\|  TNode\`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
dashed | Boolean | false | \- | N
layout | String | horizontal | options：horizontal/vertical | N

`)
interface Props {
  tab: string
}

define(
  'page-divider',
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
            <h3 id="基础分割线">
              基础分割线 <a class="header-anchor" href="#基础分割线"></a>
            </h3>
            <p>基础分割线是没有文字的独立线条，又分为水平分割线和垂直分割线。</p>
            <h4 id="水平分割线">
              水平分割线 <a class="header-anchor" href="#水平分割线"></a>
            </h4>
            <p>水平分割线常用来对不同元素内容进行分割。</p>
            <demo-wrapper>
              <divider-base></divider-base>
            </demo-wrapper>
            <h4 id="垂直分割线">
              垂直分割线 <a class="header-anchor" href="#垂直分割线"></a>
            </h4>
            <p>垂直分割线常用来做行内分割。</p>
            <demo-wrapper>
              <divider-vertical></divider-vertical>
            </demo-wrapper>
            <h3 id="带文字的分割线">
              带文字的分割线 <a class="header-anchor" href="#带文字的分割线"></a>
            </h3>
            <p>带文字的分割线是在分割线中嵌入文字，在需要对分割内容进行解释说明时使用。</p>
            <demo-wrapper>
              <divider-text></divider-text>
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
