import { define, OmiProps, h, render, WeElement, createRef } from 'omi'
import '../../../../../src/message/index'
import '../../../../../src/message/_example/close'
import '../../../../../src/message/_example/closeAll'
import '../../../../../src/space/index'
import '../../../../../src/button/index'

import '../common/index'
import * as marked from 'marked'

const docsHtml = marked.parse(`
## API
### Message Props

名称 | 类型 | 默认值 | 说明 | 必传
--  |  --  |  --  |  --  |  -- 
className |	String |	- |	类名 |	N
style |	Object |	- 	| 样式，TS 类型：React.CSSProperties |	N
closeBtn	| TNode	| undefined |	关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string 则直接显示值，如：“关闭”。也可以完全自定义按钮。TS 类型：string - boolean - TNode。通用类型定义 | N
content |	TNode |	- |	用于自定义消息弹出内容。TS 类型：string - TNode。通用类型定义 |	N
duration |	Number | 3000 |	消息内置计时器，计时到达时会触发 duration-end 事件。单位：毫秒。值为 0 则表示没有计时器。|	N
icon |	TNode |	true |	用于自定义消息前面的图标，优先级大于 theme 设定的图标。值为 false 则不显示图标，值为 true 显示 theme 设定图标。TS 类型：boolean - TNode。通用类型定义 |	N
theme |	String |	info |	消息组件风格。可选项：info/success/warning/error/question/loading。TS 类型：MessageThemeList type MessageThemeList = 'info' -'success' - 'warning' - 'error' - 'question' - 'loading'。详细类型定义 |	N
onClose |	Function ||	TS 类型：(context: { trigger: 'close-click' - 'duration-end', e?: MouseEvent }) => void 关闭消息时触发 |	N
onCloseBtnClick |	Function ||	TS 类型：(context: { e: MouseEvent }) => void 当关闭按钮存在时，用户点击关闭按钮触发 |	N
onDurationEnd |	Function ||	TS 类型：() => void 计时结束后触发 | 	N
`)

const list: any = []
let flag: number = 0
let messageClose = document.querySelector('body > message-close').shadowRoot.querySelector('t-message')
let messageAll = document.querySelector('body > message-close-all').shadowRoot.querySelector('t-space')
let body = document.querySelector('body')

interface Props {
  tab: string
}
define(
  'page-message',
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

    closeToggle = () => {
      if (flag === 1) {
        flag = 0
        messageClose.style.display = 'none'
      } else {
        flag = 1
        messageClose.style.display = 'block'
      }
    }
    openAll = () => {}
    closeAll = () => {}
    render(props: {} | OmiProps<{}, any>, store: any) {
      return (
        <>
          <td-doc-tabs ref={this.tdDocTabs} tab={this.props.tab} style="display:block"></td-doc-tabs>
          <div style="padding:24px">
            <h2>Message全局提示</h2>
            <demo-wrapper>
              <t-space direction="vertical" size="large">
                <t-message theme="info" content="This is my info" />
                <t-message theme="success" content="This is my success" />
                <t-message theme="warning" content="This is my warning" />
                <t-message theme="error" content="This is my error" />
              </t-space>
            </demo-wrapper>

            <h2>带关闭按钮的全局提示</h2>
            <demo-wrapper>
              <t-space direction="vertical" size="large">
                <t-message theme="info" content="This is my info" closeBtn />
                <t-message theme="success" content="This is my success" closeBtn />
                <t-message theme="warning" content="This is my warning" closeBtn />
                <t-message theme="error" content="This is my error" closeBtn />
              </t-space>
            </demo-wrapper>

            <h2>加载相应时间自动关闭</h2>
            <demo-wrapper>
              <t-space direction="vertical" size="large">
                <t-message duration={3000} theme="info" content="This is my info (3s)" />
                <t-message duration={5000} theme="success" content="This is my success (5s)" />
                <t-message duration={8000} theme="warning" content="This is my warning (8s)" />
                <t-message duration={10000} theme="error" content="This is my error (10s)" />
              </t-space>
            </demo-wrapper>

            <h2>使用关闭函数控制全局提示</h2>
            <demo-wrapper>
              <t-button theme="primary" onClick={this.closeToggle}>
                自由控制关闭时机（打开/关闭）
              </t-button>
              <messsage-close></messsage-close>
            </demo-wrapper>

            <h2>关闭多条全局提示</h2>
            <demo-wrapper>
              <div>待完善</div>
              <t-space>
                <t-button theme="primary" onClick={this.openAll}>
                  点击打开多个消息
                </t-button>
                <t-button theme="primary" onClick={this.closeAll}>
                  点击关闭所有消息
                </t-button>
              </t-space>
              <message-close-all></message-close-all>
            </demo-wrapper>
            <div direction="vertical" style="width:100%" dangerouslySetInnerHTML={{ __html: docsHtml }}></div>
          </div>
        </>
      )
    }
  },
)
