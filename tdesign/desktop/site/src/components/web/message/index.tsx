import { define, OmiProps, h, render, WeElement } from 'omi'
import "../../../../../src/message/index"

import '../common/index'
import * as marked from 'marked'

const docsHtml = marked.parse(`
## API
### Link Props

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

const list:any = [];

define('page-message', class extends WeElement {
    render(props: {} | OmiProps<{}, any>, store: any) {
      return (
        <>
          
        <div style="padding:24px">
          <code-box
            title="Message全局提示"
            describe="Message全局提示消息"
            code={`
              \`\`\`html
              <div style="display:flex;">
                <div direction="vertical" style="width:100%">
                  <t-message style="margin:12px;" duration={0} theme="info" content="This is my info" />
                  <t-message style="margin:12px;" duration={0} theme="success" content="This is my success" />
                  <t-message style="margin:12px;" duration={0} theme="warning" content="This is my warning" />
                  <t-message style="margin:12px;" duration={0} theme="error" content="This is my error" />
                </div>
              </div>
              \`\`\`
          `}
          >
            <h2>Message全局提示</h2>
            <div style="display:flex;">
              <div direction="vertical" style="width:100%">
                <t-message style="margin:12px;" duration={0} theme="info" content="This is my info" />
                <t-message style="margin:12px;" duration={0} theme="success" content="This is my success" />
                <t-message style="margin:12px;" duration={0} theme="warning" content="This is my warning" />
                <t-message style="margin:12px;" duration={0} theme="error" content="This is my error" />
              </div>
            </div>
          </code-box>
          <code-box
            title="Message全局提示"
            describe="Message带关闭按钮的全局提示消息"
            code={`
              \`\`\`html
              <div style="display:flex;">
                <div direction="vertical" style="width:100%">
                  <t-message style="margin:12px;" duration={0} theme="info" content="This is my info" closeBtn />
                  <t-message style="margin:12px;" duration={0} theme="success" content="This is my success" closeBtn />
                  <t-message style="margin:12px;" duration={0} theme="warning" content="This is my warning" closeBtn />
                  <t-message style="margin:12px;" duration={0} theme="error" content="This is my error" closeBtn />
                </div>
              </div>
              \`\`\`
          `}
          >
            <h2>带关闭按钮的全局提示</h2>
            <div style="display:flex;">
              <div direction="vertical" style="width:100%">
                <t-message style="margin:12px;" duration={0} theme="info" content="This is my info" closeBtn />
                <t-message style="margin:12px;" duration={0} theme="success" content="This is my success" closeBtn />
                <t-message style="margin:12px;" duration={0} theme="warning" content="This is my warning" closeBtn />
                <t-message style="margin:12px;" duration={0} theme="error" content="This is my error" closeBtn />
              </div>
            </div>
          </code-box>
          
        

          <div direction="vertical" style="width:100%" dangerouslySetInnerHTML={{ __html: docsHtml }}></div>
  
        </div>
        </>
      );
    }
  })