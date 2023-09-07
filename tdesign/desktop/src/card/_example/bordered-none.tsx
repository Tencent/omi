import { h, tag, WeElement } from 'omi'

import '../index'

@tag('card-bordered-none')
export default class CardBorderedNone extends WeElement {
  clickHandler = () => {
    alert('操作')
  }
  render() {
    return (
      <div style={{ padding: '16px', backgroundColor: 'var(--td-bg-color-container-hover)' }}>
        <t-card
          title="标题"
          actions={
            <a href={null} onClick={this.clickHandler} style={{ cursor: 'pointer' }}>
              操作
            </a>
          }
          hoverShadow
          style={{ width: '400px' }}
        >
          仅有内容区域的卡片形式。卡片内容区域可以是文字、图片、表单、表格等形式信息内容。可使用大中小不同的卡片尺寸，按业务需求进行呈现。
        </t-card>
      </div>
    )
  }
}
