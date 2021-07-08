import { tag, WeElement, h, render } from 'omi'
import './index.tsx'
import '@omiu/icon/delete-outline'
import '@omiu/icon/info'

@tag('table-demo')
export default class Table extends WeElement {

  render(props) {
    return <div>
      <o-popconfirm
        onconfirm={e => {
          console.log(11)
        }}
        oncancel={e => {
          console.log(22)
        }}
        cancel-button-text="取消"
        confirm-button-text="删除"
        content="确认要删除[记录名称]吗？"
      >
        <o-icon-info color="#F56C6C" slot="icon"></o-icon-info>
        <span class="reply-text">
          <o-icon-delete-outline></o-icon-delete-outline>
          <span>删除</span>
        </span>

      </o-popconfirm>

      <o-popconfirm
        onconfirm={e => {
          console.log(11)
        }}
        oncancel={e => {
          console.log(22)
        }}
        cancel-button-text="取消"
        confirm-button-text="删除"
        content="确认要删除[记录名称]吗？"
      >
        <o-icon-info color="#F56C6C" slot="icon"></o-icon-info>
        <span class="reply-text">
          <o-icon-delete-outline></o-icon-delete-outline>
          <span>删除</span>
        </span>

      </o-popconfirm>
    </div>
  }
}


render(<table-demo></table-demo>, 'body')
