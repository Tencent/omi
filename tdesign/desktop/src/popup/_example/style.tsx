import { h, tag, WeElement } from 'omi'

import '../index'
import '../../button/index'
import '../../space/index'

@tag('popup-style')
export default class PopupStyle extends WeElement {
  render() {
    return (
      <t-space>
        <t-popup
          content="浮层拥有自定义类名，可以自定义浮层样式"
          overlayClassName="tdesign-demo__custom-popup"
          placement="bottom"
        >
          <t-button variant="outline">自定义浮层类名</t-button>
        </t-popup>
        <t-popup
          content="浮层宽度是固定的，不会随内容变化而变化"
          overlayInnerStyle={{ width: '350px', textAlign: 'center' }}
          placement="bottom"
        >
          <t-button variant="outline">固定浮层宽度</t-button>
        </t-popup>
        <t-popup
          content="可以设置浮层最大宽度，当内容超出最大宽度时，文本内容才会换行"
          overlayStyle={{ maxWidth: '250px' }}
          placement="bottom"
        >
          <t-button variant="outline">浮层最大宽度</t-button>
        </t-popup>
        <t-popup
          content="overlayInnerStyle 作为函数使用，可以让浮层内容和触发元素同宽"
          overlayInnerStyle={(triggerElem: HTMLElement) => ({ width: `${triggerElem.offsetWidth}px` })}
          placement="bottom"
        >
          <t-button variant="outline">浮层和触发元素同宽</t-button>
        </t-popup>
      </t-space>
    )
  }
}
