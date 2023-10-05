import { WeElement, define, h, createRef } from 'omi'
import '../common/index'
import '../../../../../src/image/_example/avif'
import '../../../../../src/image/_example/extra-always'
import '../../../../../src/image/_example/extra-hover'
import '../../../../../src/image/_example/fill-mode'
import '../../../../../src/image/_example/fill-position'
import '../../../../../src/image/_example/gallery-cover'
import '../../../../../src/image/_example/lazy-list'
import '../../../../../src/image/_example/lazy-single'
import '../../../../../src/image/_example/placeholder'
import '../../../../../src/image/_example/shape'

import * as marked from 'marked'

const docsHTML = marked.parse(`

## API
### Image Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：\`React.CSSProperties\` | N
alt | String | - | 图片描述 | N
error | TNode | - | 自定义图片加载失败状态下的显示内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
fit | String | fill | 图片填充模式。可选项：contain/cover/fill/none/scale-down | N
gallery | Boolean | false | 是否展示为图集样式 | N
lazy | Boolean | false | 是否开启图片懒加载 | N
loading | TNode | - | 自定义加载中状态的图片内容，如：“加载中”。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
overlayContent | TNode | - | 图片上方的浮层内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
overlayTrigger | String | always | 浮层 \`overlayContent\` 出现的时机。可选项：always/hover | N
placeholder | TNode | - | 占位元素，展示层级低于 \`loading\` \`error\` 和图片本身，值类型为字符串时表示占位图片地址。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
position | String | center | 等同于原生的 object-position 属性，可选值为 top right bottom left 或 string，可以自定义任何单位，px 或者 百分比 | N
shape | String | square | 图片圆角类型。可选项：circle/round/square | N
src | String | - | 图片链接 | N
srcset | Object | - | 图片地址，支持特殊格式的图片，如 \`.avif\` 和 \`.webp\`。TS 类型：\`ImageSrcset\` \`interface ImageSrcset { 'image/avif': string; 'image/webp': string; }\`。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/image/type.ts) | N
onError | Function |  | TS 类型：\`(context: { e: Event }) => void\`<br/>图片加载失败时触发 | N
onLoad | Function |  | TS 类型：\`(context: { e: Event }) => void\`<br/>图片加载完成时触发 | N
`)
interface Props {
  tab: string
}

define(
  'page-image',
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
            <h3 id="基础图片">
              基础图片 <a class="header-anchor" href="#基础图片"></a>
            </h3>
            <p>不同填充模式的图片</p>
            <p>提供 fill、contain、cover、none、scale-down 5 种填充类型。</p>
            <demo-wrapper>
              <image-fill-mode></image-fill-mode>
            </demo-wrapper>
            <p>不同填充位置的图片</p>
            <p>图片相对于容器的位置。当图片过大时，提供显示图片的局部左侧对齐、或右侧对齐的不同位置。</p>
            <demo-wrapper>
              <image-fill-position></image-fill-position>
            </demo-wrapper>

            <h3 id="不同形状的图片">
              不同形状的图片 <a class="header-anchor" href="#不同形状的图片"></a>
            </h3>
            <p>提供方形、圆角方形、圆角 3 种形状。</p>
            <p>当图片长宽不相等时，无法使用 circle 展示一个正圆。</p>
            <demo-wrapper>
              <image-shape></image-shape>
            </demo-wrapper>

            <h3 id="图集样式的图片">
              图集样式的图片 <a class="header-anchor" href="#图集样式的图片"></a>
            </h3>
            <p>图片呈现图集样式的效果。</p>
            <demo-wrapper>
              <image-gallery-cover></image-gallery-cover>
            </demo-wrapper>

            <h3 id="加载状态的图片">
              加载状态的图片 <a class="header-anchor" href="#加载状态的图片"></a>
            </h3>
            <p>显示加载的不同状态，提供默认、自定义两种占位样式。</p>
            <demo-wrapper>
              <image-placeholder></image-placeholder>
            </demo-wrapper>

            <h3 id="图片懒加载">
              图片懒加载 <a class="header-anchor" href="#图片懒加载"></a>
            </h3>
            <h4 id="单图用法">
              单图用法 <a class="header-anchor" href="#单图用法"></a>
            </h4>
            <p>placeholder 在图像加载时占位显示。</p>
            <demo-wrapper>
              <image-lazy-single></image-lazy-single>
            </demo-wrapper>
            <h4 id="图片列表用法">
              图片列表用法 <a class="header-anchor" href="#图片列表用法"></a>
            </h4>
            <p>多张图片滚动下拉时，尚未出现的图片会用占位图表示，呈现懒加载的效果。</p>
            <demo-wrapper>
              <image-lazy-list></image-lazy-list>
            </demo-wrapper>

            <h3 id="图片扩展元素">
              图片扩展元素 <a class="header-anchor" href="#图片扩展元素"></a>
            </h3>
            <p>带有悬浮层的图片。</p>
            <h4 id="始终显示">
              始终显示 <a class="header-anchor" href="#始终显示"></a>
            </h4>
            <p>悬浮层常驻显示，不因用户操作出现或消失。</p>
            <demo-wrapper>
              <image-extra-always></image-extra-always>
            </demo-wrapper>
            <h4 id="悬浮显示">
              悬浮显示 <a class="header-anchor" href="#悬浮显示"></a>
            </h4>
            <p>默认不显示悬浮层，鼠标悬浮到图片区域后悬浮层出现。</p>
            <demo-wrapper>
              <image-extra-hover></image-extra-hover>
            </demo-wrapper>

            <h3 id="支持-和-格式的图片">
              支持 <td-code text="avif"></td-code> 和 <td-code text="webp"></td-code> 格式的图片{' '}
              <a class="header-anchor" href="#支持-和-格式的图片"></a>
            </h3>
            <p>
              支持使用 <td-code text="srcset"></td-code> 设置特殊格式的图片渲染，如 <td-code text=".avif"></td-code> 和{' '}
              <td-code text=".webp"></td-code>。图片转码为 AVIF/WEBP 推荐使用腾讯云数据万象
              <a href="https://cloud.tencent.com/document/product/436/60455">图片压缩服务</a>。
            </p>
            <demo-wrapper>
              <image-avif></image-avif>
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
