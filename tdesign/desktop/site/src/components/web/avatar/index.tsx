import { WeElement, define, h, createRef } from 'omi'
import '../common/index'
import '../../../../../src/avatar/_example/adjust'
import '../../../../../src/avatar/_example/base'
import '../../../../../src/avatar/_example/group-cascading'
import '../../../../../src/avatar/_example/group-max'
import '../../../../../src/avatar/_example/group'
import '../../../../../src/avatar/_example/shape'
import '../../../../../src/avatar/_example/size'

import * as marked from 'marked'

const docsHTML = marked.parse(`

## API
### Avatar Props
name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式,TS 类型：\`React.CSSProperties\` | N
alt | String | - | 头像替换文本，仅当图片加载失败时有效 | N
children | TNode | - | 子元素内容，同 content。TS 类型：\`string \\| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
content | TNode | - | 子元素内容。TS 类型：\`string \\| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
hideOnLoadFailed | Boolean | false | 加载失败时隐藏图片 | N
icon | TElement | - | 图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
image | String | - | 图片地址 | N
imageProps | Object | - | 透传至 Image 组件。TS 类型：\`ImageProps\`,[Image API Documents](./image?tab=api)。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/avatar/type.ts) | N
shape | String | circle | 形状。可选项:circle/round。TS 类型：\`ShapeEnum\` type ShapeEnum = circle \\| round。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/avatar/type.ts) | N
size | String | - | 尺寸,示例值:small /medium /large /24px /38px等,Avatar 单独存在时，默认值为 medium。如果父组件存在 AvatarGroup，默认值便由 AvatarGroup.size 决定 | N
onError | Function |  | TS 类型：(context: { e: ImageEvent }) => void ,图片加载失败时触发 | N


### AvatarGroup Props
name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式。 | N
cascading | String | 'right-up' | 图片之间的层叠关系，可选值：左侧图片在上和右侧图片在上。可选项:left-up/right-up。TS 类型：\`CascadingValue\` type CascadingValue = left-up \\| right-up。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/avatar/type.ts) | N
collapseAvatar | TNode | - | 头像数量超出时，会出现一个头像折叠元素。该元素内容可自定义。默认为 \`+ N\`。示例：\` + 5\\|...\\|更多\`。TS 类型：\`string \\| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
max | Number | - | 能够同时显示的最多头像数量 | N      
popupProps | Object | - | 头像右上角提示信息。TS 类型：\`PopupProps\`,[Popup API Documents](./popup?tab=api)。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/avatar/type.ts) | N
size | String | - | 尺寸,示例值:small/medium/large/24px/38px 等。优先级低于 Avatar.size | N

`)
interface Props {
  tab: string
}

define(
  'page-avatar',
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
            <h3 id="头像类型">
              头像类型<a class="header-anchor" href="#头像类型"></a>
            </h3>
            <p>头像提供了 3 种不同类型的头像：图标头像、图片头像、字符头像</p>
            <demo-wrapper>
              <avatar-base></avatar-base>
            </demo-wrapper>
            <h4 id="头像形状">
              头像形状 <a class="header-anchor" href="#头像形状"></a>
            </h4>
            <p>头像默认支持两种形状：round、circle，用户也可自定义设置头像形状</p>
            <demo-wrapper>
              <avatar-shape></avatar-shape>
            </demo-wrapper>
            <h4 id="头像大小">
              头像大小 <a class="header-anchor" href="#头像大小"></a>
            </h4>
            <p>头像默认支持三种大小：small、medium、large，用户可自定义设置大小</p>
            <demo-wrapper>
              <avatar-size></avatar-size>
            </demo-wrapper>
            <h3 id="字符头像大小自适应">
              字符头像大小自适应 <a class="header-anchor" href="#字符头像大小自适应"></a>
            </h3>
            <p>头像支持字符自适应，即字符长度过长时，头像可自动调整字符以便呈现完整内容</p>
            <demo-wrapper>
              <avatar-adjust></avatar-adjust>
            </demo-wrapper>
            <h3 id="组合头像">
              组合头像 <a class="header-anchor" href="#组合头像"></a>
            </h3>
            <p>组合头像展示</p>
            <demo-wrapper>
              <avatar-group></avatar-group>
            </demo-wrapper>
            <h3 id="组合头像偏移方向">
              组合头像偏移方向 <a class="header-anchor" href="#组合头像偏移方向"></a>
            </h3>
            <p>组合头像可控制层叠方向</p>
            <demo-wrapper>
              <avatar-group-cascading></avatar-group-cascading>
            </demo-wrapper>
            <h3 id="组合头像个数">
              组合头像个数 <a class="header-anchor" href="#组合头像个数"></a>
            </h3>
            <p>组合头像可设置最大展示个数，超过则隐藏显示</p>
            <demo-wrapper>
              <avatar-group-max></avatar-group-max>
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
