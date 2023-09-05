import { define, OmiProps, h, render, WeElement } from 'omi'
import '../../../../../src/alert/index'
import { ButtonShape, ButtonTheme, ButtonVariant } from '@src/button/type'
import { SizeEnum } from '@src/common'

import * as marked from 'marked'

const docsHtml = marked.parse(`
## API
### Link Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className |	String |	- |	类名 |	N
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

const operation = <span>相关操作</span>

define(
  'page-alert',
  class extends WeElement {
    render(props: {} | OmiProps<{}, any>, store: any) {
      return (
        <div style="padding:24px">
          <div style="display:flex;">
            <div direction="vertical" style="width:100%">
              <t-alert style="margin-bottom:16px" theme="info" message="这是一条消息" />
              <t-alert style="margin-bottom:16px" theme="success" message="这是一条消息" />
              <t-alert style="margin-bottom:16px" theme="warning" message="这是一条消息" />
              <t-alert style="margin-bottom:16px" theme="error" message="这是一条消息" />
            </div>
          </div>

          <div direction="vertical" style="width:100%">
            <t-alert
              operation={operation}
              title="这是一条普通的消息提示"
              style="margin-bottom:16px"
              theme="info"
              message="这是一条普通的消息提示描述，这是一条普通的消息提示描述"
              close
            />
            <t-alert operation={operation} style="margin-bottom:16px" theme="success" message="这是一条消息" close />
            <t-alert operation={operation} style="margin-bottom:16px" theme="warning" message="这是一条消息" close />
            <t-alert operation={operation} style="margin-bottom:16px" theme="error" message="这是一条消息" close />
          </div>

          <div direction="vertical" style="width:100%">
            <t-alert
              title="这是一条普通的消息提示"
              style="margin-bottom:16px"
              theme="info"
              message={[
                '1.这是一条普通的消息提示描述，',
                '2.这是一条普通的消息提示描述，',
                '3.这是一条普通的消息提示描述，',
                '4.这是一条普通的消息提示描述，',
                '5.这是一条普通的消息提示描述，',
              ]}
              maxLine={2}
              close
              onClose={() => console.log('1')}
              onClosed={() => console.log('2')}
            />
          </div>

          <div direction="vertical" style="width:100%" dangerouslySetInnerHTML={{ __html: docsHtml }}></div>
        </div>
      )
    }
  },
)
