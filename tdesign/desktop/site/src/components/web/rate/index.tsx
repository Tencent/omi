import { WeElement, define, h, createRef } from 'omi'
import '../common/index'
import '../../../../../src/rate/_example/base'
import '../../../../../src/rate/_example/custom'
import '../../../../../src/rate/_example/status'
import '../../../../../src/rate/_example/size'
import '../../../../../src/rate/_example/icon'
import * as marked from 'marked'

const docsHTML = marked.parse(`

## API
### Rate Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
allowHalf | Boolean | false | 是否允许半选 | N
color | String / Array | '#ED7B2F' | 评分图标的颜色，样式中默认为 #ED7B2F。一个值表示设置选中高亮的五角星颜色，示例：[选中颜色]。数组则表示分别设置 选中高亮的五角星颜色 和 未选中暗灰的五角星颜色，[选中颜色，未选中颜色]。示例：['#ED7B2F', '#E3E6EB']。TS 类型：\`string \| Array<string>\` | N
count | Number | 5 | 评分的数量 | N
disabled | Boolean | - | 是否禁用评分 | N
gap | Number | 4 | 评分图标的间距 | N
icon | TElement | - | 自定义评分图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
showText | Boolean | false | 是否显示对应的辅助文字 | N
size | String | 24px | 评分图标的大小，示例：\`20px\` | N
texts | Array | [] | 评分等级对应的辅助文字。组件内置默认值为：['极差', '失望', '一般', '满意', '惊喜']。自定义值示例：['1分', '2分', '3分', '4分', '5分']。TS 类型：\`Array<string>\` | N
value | Number | 0 | 选择评分的值 | N
defaultValue | Number | 0 | 选择评分的值。非受控属性 | N
onChange | Function |  | TS 类型：\`(value: number) => void\`<br/>评分数改变时触发 | N

`)
interface Props {
  tab: string
}

define(
  'page-rate',
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
            <h3 id="实心评分">
              实心评分 <a class="header-anchor" href="#实心评分"></a>
            </h3>

            <demo-wrapper>
              <rate-base></rate-base>
            </demo-wrapper>
            <h3 id="自定义评分数量">
              自定义评分数量 <a class="header-anchor" href="#自定义评分数量"></a>
            </h3>
            <demo-wrapper>
              <rate-custom></rate-custom>
            </demo-wrapper>
            <h3 id="带描述评分">
              带描述评分 <a class="header-anchor" href="#带描述评分"></a>
            </h3>
            <demo-wrapper>待完善</demo-wrapper>
            <h3 id="组件状态">
              组件状态 <a class="header-anchor" href="#组件状态"></a>
            </h3>
            <demo-wrapper>
              <rate-status></rate-status>
            </demo-wrapper>
            <h3 id="组件大小">
              组件大小 <a class="header-anchor" href="#组件大小"></a>
            </h3>
            <p>
              可以通过 <td-code text="size"></td-code> 属性调整图标尺寸。
            </p>
            <demo-wrapper>
              <rate-size></rate-size>
            </demo-wrapper>
            <h3 id="自定义评分图标">
              自定义评分图标 <a class="header-anchor" href="#自定义评分图标"></a>
            </h3>
            <p>
              可以通过 <td-code text="icon"></td-code> 属性自定义高亮图标。
            </p>
            <demo-wrapper>
              <rate-icon />
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
