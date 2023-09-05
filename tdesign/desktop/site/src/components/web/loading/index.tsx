import { WeElement, define, h, createRef } from 'omi'
import '../common/index'
import '../../../../../src/loading/_example/base'
import '../../../../../src/loading/_example/delay'
import '../../../../../src/loading/_example/fullscreen'
import '../../../../../src/loading/_example/icon-text'
import '../../../../../src/loading/_example/service'
import '../../../../../src/loading/_example/size'
import '../../../../../src/loading/_example/text'
import '../../../../../src/loading/_example/wrap'
import * as marked from 'marked'

const docsHTML = marked.parse(`

## API
### Loading Props

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
loading | Boolean | true | 是否处于加载状态 | N
preventScrollThrough | Boolean | true | 防止滚动穿透，全屏加载模式有效 | N
showOverlay | Boolean | true | 是否需要遮罩层，遮罩层对包裹元素才有效 | N
size | String | medium | 尺寸，示例：small/medium/large/12px/56px/0.3em | N
text | TNode | - | 加载提示文案。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
zIndex | Number | - | 消息通知层级，样式默认为 3500 | N

### loading 或 LoadingPlugin

这是一个插件函数，参数形式为顺序参数（形如：(a, b, c)），而非对象参数（形如：({ a, b, c })）。顺序参数如下，

参数名称 | 参数类型 | 参数默认值 | 参数说明
-- | -- | -- | --
options | Function | - | 必需。TS 类型：\`boolean \| TdLoadingProps\`

插件返回值：\`LoadingInstance【interface LoadingInstance { hide: () => void }】\`
`)
interface Props {
  tab: string
}

define(
  'page-loading',
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
            <h3 id="图标加载">
              图标加载 <a class="header-anchor" href="#图标加载"></a>
            </h3>
            <p>加载过程中只有图标显示。适用于打开页面或操作完成后模块内等待刷新的加载场景。</p>
            <demo-wrapper>
              <loading-base></loading-base>
            </demo-wrapper>
            <h3 id="文字加载">
              文字加载 <a class="header-anchor" href="#文字加载"></a>
            </h3>
            <p>加载过程中有文字显示。适用于打开页面或操作完成后模块内等待刷新的加载场景。</p>
            <demo-wrapper>
              <loading-text></loading-text>
            </demo-wrapper>
            <h3 id="文字和图标共同显示加载">
              文字和图标共同显示加载 <a class="header-anchor" href="#文字和图标共同显示加载"></a>
            </h3>
            <p>加载过程中有文字和图标共同显示。适用于打开页面或操作完成后页面内等待刷新的加载场景。</p>
            <demo-wrapper>
              <loading-icon-text></loading-icon-text>
            </demo-wrapper>
            <h3 id="不同尺寸的加载">
              不同尺寸的加载 <a class="header-anchor" href="#不同尺寸的加载"></a>
            </h3>
            <p>
              小尺寸适用于组件内加载场景，中尺寸适用于容器如卡片、表格等区域的加载场景，大尺寸适用于页面全屏加载场景。
            </p>
            <demo-wrapper>
              <loading-size></loading-size>
            </demo-wrapper>
            <h3 id="有包裹的加载">
              有包裹的加载 <a class="header-anchor" href="#有包裹的加载"></a>
            </h3>
            <p>Loading 组件可以作为容器包裹需要显示加载状态的内容。</p>
            <demo-wrapper>
              <loading-wrap></loading-wrap>
            </demo-wrapper>
            <h3 id="有延时的加载">
              有延时的加载 <a class="header-anchor" href="#有延时的加载"></a>
            </h3>
            <p>设置最短延迟响应时间，低于响应时间的操作不显示加载状态。</p>
            <demo-wrapper>
              <loading-delay></loading-delay>
            </demo-wrapper>
            <h3 id="全屏加载">
              全屏加载 <a class="header-anchor" href="#全屏加载"></a>
            </h3>
            <p>全屏展示加载状态，阻止用户操作。</p>
            <demo-wrapper>
              <loading-fullscreen></loading-fullscreen>
            </demo-wrapper>
            <h3 id="挂载到指定元素">
              挂载到指定元素 <a class="header-anchor" href="#挂载到指定元素"></a>
            </h3>
            <p>
              可通过 <td-code text="attach"></td-code> 挂载到指定元素。
            </p>
            <p>
              注：被挂载元素（loading的父元素）需设置：<td-code text="position: relative;"></td-code>
            </p>
            <demo-wrapper>待完善</demo-wrapper>
            <h3 id="函数方式调用">
              函数方式调用 <a class="header-anchor" href="#函数方式调用"></a>
            </h3>
            <demo-wrapper>
              <loading-service></loading-service>
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
