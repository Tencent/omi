import { h, tag, WeElement } from 'omi'

import '../index'
import '../../comment'

@tag('card-footer-content')
export default class CardFooterContent extends WeElement {
  render() {
    return (
      <t-card
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
