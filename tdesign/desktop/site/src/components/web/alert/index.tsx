import { WeElement, define, h, createRef } from 'omi'
import '../common/index'
import '../../../../../src/alert/_example/base'
import '../../../../../src/alert/_example/close'
import '../../../../../src/alert/_example/collapse'
import '../../../../../src/alert/_example/icon'
import '../../../../../src/alert/_example/operation'
import '../../../../../src/alert/_example/title'
import * as marked from 'marked'

const docsHTML = marked.parse(`
## API
### Alert Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
class |	String |	- |	类名 |	N
style |	Object |	- 	|样式，TS 类型：React.CSSProperties |	N
close |	TNode |	false |	关闭按钮。值为 true 则显示默认关闭按钮；值为 false 则不显示按钮；值类型为 string 则直接显示；值类型为 Function 则可以自定关闭按钮。TS 类型：string,boolean,TNode。通用类型定义 |	N
icon |	TElement |	- |	图标。TS 类型：TNode。通用类型定义 |	N
maxLine |	Number |	0 	| 内容显示最大行数，超出的内容会折叠收起，用户点击后再展开。值为 0 表示不折叠 |	N
message |	TNode |	- |	内容（子元素）。TS 类型：string, TNode。通用类型定义 |	N
operation |	TElement |	- |	跟在告警内容后面的操作区。TS 类型：TNode。通用类型定义 | 	N
theme |	String |	info |	组件风格。可选项：success/info/warning/error |	N
title |	TNode |	- |	标题。TS 类型：string , TNode。通用类型定义 |	N
onClose |	Function |-	|	TS 类型：(context: { e: MouseEvent }) => void 关闭按钮点击时触发 |	N
onClosed |	Function | - |	TS 类型：(context: { e: TransitionEvent }) => void 告警提示框关闭动画结束后触发 |	N
`)
interface Props {
  tab: string
}

define(
  'page-alert',
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
            <h3 id="基础警告">
              基础警告 <a class="header-anchor" href="#基础警告"></a>
            </h3>
            <p>使用简洁文字提示的最基础警告条，包含 4 种情况的提示：普通消息，成功，警示，失败。</p>
            <demo-wrapper>
              <alert-base></alert-base>
            </demo-wrapper>
            <h3 id="带操作的警告">
              带操作的警告 <a class="header-anchor" href="#带操作的警告"></a>
            </h3>
            <p>
              当需要对此警告做操作，可以配置 <td-code text="operation"></td-code> 来增加相关操作。
            </p>
            <demo-wrapper>
              <alert-operation></alert-operation>
            </demo-wrapper>
            <h3 id="带相关描述文字的警告">
              带相关描述文字的警告 <a class="header-anchor" href="#带相关描述文字的警告"></a>
            </h3>
            <p>当信息内容较复杂时，可使用相关描述文字辅助说明。</p>
            <demo-wrapper>
              <alert-title></alert-title>
            </demo-wrapper>
            <h3 id="折叠的警告">
              折叠的警告 <a class="header-anchor" href="#折叠的警告"></a>
            </h3>
            <p>当信息内容超过 2 行时，可使用折叠的方式将部分信息隐藏。</p>
            <demo-wrapper>
              <alert-collapse></alert-collapse>
            </demo-wrapper>
            <h3 id="自定义icon的警告">
              自定义icon的警告 <a class="header-anchor" href="#自定义icon的警告"></a>
            </h3>
            <p>用户可以通过自定义icon的方式设置警告的icon</p>
            <demo-wrapper>
              <alert-icon></alert-icon>
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
