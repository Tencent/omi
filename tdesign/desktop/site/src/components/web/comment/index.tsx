import { WeElement, define, h, createRef } from 'omi'
import '../common/index'
import '../../../../../src/comment/_example/base'
import '../../../../../src/comment/_example/list'
import '../../../../../src/comment/_example/operation'
import '../../../../../src/comment/_example/quote'
import '../../../../../src/comment/_example/reply-form'
import '../../../../../src/comment/_example/reply'

import * as marked from 'marked'

const docsHTML = marked.parse(`

## API
### Comment Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式 | N
actions | Array | - | 操作。TS 类型：\`Array<TNode>\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts)  | N
author | TNode | - | 作者。TS 类型：\`string\\|TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
avatar | TNode | - | 头像。TS 类型：\`string\\|AvaterProps\\|TNode\`,[Avatar API Documents](./avatar?tab=api)。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) 。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/comment/type.ts)  | N
content | TNode | - | 内容。TS 类型：\`string \\|  TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts)  | N
datetime | TNode | - | 时间。TS 类型：\`string\\|TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts)  | N
quote | TNode | - | 引用。TS 类型：\`string\\|TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts)  | N
reply | TNode | - | 回复。TS 类型：\`string\\|TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N




`)
interface Props {
  tab: string
}

define(
  'page-comment',
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
            <h3 id="基础评论">
              基础评论<a class="header-anchor" href="#基础评论"></a>
            </h3>
            <p>评论最基本的组件，包括头像、作者、时间、评论内容，适用于各种需要进行评论展示的场景。</p>
            <demo-wrapper>
              <comment-base></comment-base>
            </demo-wrapper>
            <h4 id="带操作的评论">
              带操作的评论 <a class="header-anchor" href="#带操作的评论"></a>
            </h4>
            <p>可对评论内容进行相关操作的组件，适用于需要自定义操作列的场景</p>
            <demo-wrapper>
              <comment-operation></comment-operation>
            </demo-wrapper>
            <h4 id="列表评论">
              列表评论 <a class="header-anchor" href="#列表评论"></a>
            </h4>
            <p>以列表形式展示的评论。</p>
            <demo-wrapper>
              <comment-list></comment-list>
            </demo-wrapper>
            <h3 id="带回复的评论">
              带回复的评论 <a class="header-anchor" href="#带回复的评论"></a>
            </h3>
            <p>展示一条评论的回复内容的组件，适用于对评论进行回复的场景，作者名称后可标明回复对象的名称。</p>
            <demo-wrapper>
              <comment-reply></comment-reply>
            </demo-wrapper>
            <h3 id="带引用的评论">
              带引用的评论 <a class="header-anchor" href="#带引用的评论"></a>
            </h3>
            <p>评论可以引用其他内容，表示评论和其他内容的引用关系。</p>
            <demo-wrapper>
              <comment-quote></comment-quote>
            </demo-wrapper>
            <h3 id="带回复框的评论">
              带回复框的评论 <a class="header-anchor" href="#带回复框的评论"></a>
            </h3>
            <p>对评论内容进行回复操作的组件，可在回复框内直接输入内容进行回复。</p>
            <demo-wrapper>
              <comment-reply-form></comment-reply-form>
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
