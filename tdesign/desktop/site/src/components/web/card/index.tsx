import { WeElement, define, h, createRef } from 'omi'
import '../common/index'
import '../../../../../src/card/_example/base'
import '../../../../../src/card/_example/bordered-none'
import '../../../../../src/card/_example/bordered'
import '../../../../../src/card/_example/footer-actions'
import '../../../../../src/card/_example/footer-content-actions'
import '../../../../../src/card/_example/footer-content'
import '../../../../../src/card/_example/footer'
import '../../../../../src/card/_example/header-all-props'
import '../../../../../src/card/_example/header-bordered'
import '../../../../../src/card/_example/header-description'
import '../../../../../src/card/_example/header-footer-actions'
import '../../../../../src/card/_example/header-subtitle-footer-actions'
import '../../../../../src/card/_example/header-subtitle'
import '../../../../../src/card/_example/header'
import * as marked from 'marked'

const docsHTML = marked.parse(`

## API
### card Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：\`React.CSSProperties\` | N
attach | String / Function | '' | 挂载元素，默认挂载到组件本身所在的位置。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body。TS 类型：\`AttachNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
children | TNode | - | 子元素，同 content。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
content | TNode | - | 子元素。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
delay | Number | 0 | 延迟显示加载效果的时间，用于防止请求速度过快引起的加载闪烁，单位：毫秒 | N
fullscreen | Boolean | false | 是否显示为全屏加载 | N
indicator | TNode | true | 加载指示符，值为 true 显示默认指示符，值为 false 则不显示，也可以自定义指示符。TS 类型：\`boolean \| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
inheritColor | Boolean | false | 是否继承父元素颜色 | N
card | Boolean | true | 是否处于加载状态 | N
preventScrollThrough | Boolean | true | 防止滚动穿透，全屏加载模式有效 | N
showOverlay | Boolean | true | 是否需要遮罩层，遮罩层对包裹元素才有效 | N
size | String | medium | 尺寸，示例：small/medium/large/12px/56px/0.3em | N
text | TNode | - | 加载提示文案。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
zIndex | Number | - | 消息通知层级，样式默认为 3500 | N

### card 或 cardPlugin

这是一个插件函数，参数形式为顺序参数（形如：(a, b, c)），而非对象参数（形如：({ a, b, c })）。顺序参数如下，

参数名称 | 参数类型 | 参数默认值 | 参数说明
-- | -- | -- | --
options | Function | - | 必需。TS 类型：\`boolean \| TdcardProps\`

插件返回值：\`cardInstance【interface cardInstance { hide: () => void }】\`
`)
interface Props {
  tab: string
}

define(
  'page-card',
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
            <h3 id="极简卡片">
              极简卡片 <a class="header-anchor" href="#极简卡片"></a>
            </h3>
            <p>仅有内容的卡片形式。</p>
            <h4 id="有边框">
              有边框 <a class="header-anchor" href="#有边框"></a>
            </h4>
            <demo-wrapper>
              <card-bordered></card-bordered>
            </demo-wrapper>
          </div>
          <h4 id="无边框">
            无边框 <a class="header-anchor" href="#无边框"></a>
          </h4>
          <demo-wrapper>
            <card-bordered-none></card-bordered-none>
          </demo-wrapper>
          <h3 id="带-header-的卡片">
            带 header 的卡片 <a class="header-anchor" href="#带-header-的卡片"></a>
          </h3>
          <p>
            由极简卡片上方的标题栏组成，标题栏中可包含标题、图片、操作区、状态等内容。顶部栏可以定义所有的内容，以用户的自定义元素为准。
          </p>
          <h4 id="不带分割线">
            不带分割线 <a class="header-anchor" href="#不带分割线"></a>
          </h4>
          <demo-wrapper>
            <card-header></card-header>
          </demo-wrapper>
          <h4 id="带分割线">
            带分割线 <a class="header-anchor" href="#带分割线"></a>
          </h4>
          <demo-wrapper>
            <card-header-bordered></card-header-bordered>
          </demo-wrapper>
          <h3 id="带-footer-的卡片">
            带 footer 的卡片 <a class="header-anchor" href="#带-footer-的卡片"></a>
          </h3>
          <p>由极简卡片下方的底部栏组成，可包含标题、图片、操作区、状态等内容。</p>
          <demo-wrapper>
            <card-footer></card-footer>
          </demo-wrapper>
          <h4 id="全部为操作内容的底部栏">
            全部为操作内容的底部栏 <a class="header-anchor" href="#全部为操作内容的底部栏"></a>
          </h4>
          <demo-wrapper>
            <card-footer-actions></card-footer-actions>
          </demo-wrapper>
          <h4 id="全部为展示内容的底部栏">
            全部为展示内容的底部栏 <a class="header-anchor" href="#全部为展示内容的底部栏"></a>
          </h4>
          <demo-wrapper>
            <card-footer-content></card-footer-content>
          </demo-wrapper>
          <h4 id="同时带展示内容与操作内容的底部栏">
            同时带展示内容与操作内容的底部栏 <a class="header-anchor" href="#同时带展示内容与操作内容的底部栏"></a>
          </h4>
          <demo-wrapper>
            <card-footer-content-actions></card-footer-content-actions>
          </demo-wrapper>
          <h3 id="同时带-header-和-footer-的卡片">
            同时带 header 和 footer 的卡片 <a class="header-anchor" href="#同时带-header-和-footer-的卡片"></a>
          </h3>
          <p>由顶部栏、底部栏和极简卡片组成的复杂卡片，三个区域内容可根据需要对内容进行配置。</p>
          <demo-wrapper>
            <card-header-subtitle-footer-actions></card-header-subtitle-footer-actions>
          </demo-wrapper>
          <demo-wrapper>
            <card-header-footer-actions></card-header-footer-actions>
          </demo-wrapper>
          <h3 id="不同标题内容的卡片">
            不同标题内容的卡片 <a class="header-anchor" href="#不同标题内容的卡片"></a>
          </h3>
          <p>带有主标题、副标题、或标题描述的卡片。</p>
          <h4 id="带主副标题的卡片">
            带主副标题的卡片 <a class="header-anchor" href="#带主副标题的卡片"></a>
          </h4>
          <demo-wrapper>
            <card-header-subtitle></card-header-subtitle>
          </demo-wrapper>
          <h4 id="带标题描述的卡片">
            带标题描述的卡片 <a class="header-anchor" href="#带标题描述的卡片"></a>
          </h4>
          <demo-wrapper>
            <card-header-description></card-header-description>
          </demo-wrapper>
          <h4 id="同时带主副标题与标题描述的卡片">
            同时带主副标题与标题描述的卡片 <a class="header-anchor" href="#同时带主副标题与标题描述的卡片"></a>
          </h4>
          <demo-wrapper>
            <card-header-all-props></card-header-all-props>
          </demo-wrapper>
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
