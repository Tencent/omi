import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button'
import '../../dropdown'
import '../../comment'
import '../../icon/more'

@tag('card-footer-content-actions')
export default class CartFooterContentActions extends WeElement {
  options = [
    {
      content: '操作一',
      value: 1,
    },
    {
      content: '操作二',
      value: 2,
    },
  ]

  clickHandler = (data: any) => {
    alert(`选中【${data.value}】`)
  }
  render() {
    return (
      <t-card
        actions={
          <t-dropdown options={this.options} onClick={this.clickHandler} minColumnWidth="112">
            <t-button variant="text" shape="square">
              <t-icon-more />
            </t-button>
          </t-dropdown>
        }
        bordered
        theme="poster2"
        cover="https://tdesign.gtimg.com/site/source/card-demo.png"
        style={{ width: '400px' }}
        footer={
          <t-comment
            author="标题"
            content="卡片内容"
            avatar="https://tdesign.gtimg.com/site/avatar-boy.jpg"
          ></t-comment>
        }
      ></t-card>
    )
  }
}
