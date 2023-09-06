import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space'
import '../../icon/add'
import '../../icon/search'
import '../../icon/cloud-upload'
import '../../icon/discount'
import '../../icon/cloud-download'

@tag('button-icon')
export default class ButtonIcon extends WeElement {
  render() {
    return (
      <t-space>
        <t-button icon={<t-icon-add />}>新建</t-button>
        <t-button variant="outline" icon={<t-icon-cloud-upload />}>
          上传文件
        </t-button>
        <t-button shape="circle" icon={<t-icon-discount />} />
        <t-button shape="circle" icon={<t-icon-cloud-download />} />
        <t-button theme="default" variant="outline" icon={<t-icon-search />}>
          Function Icon
        </t-button>
      </t-space>
    )
  }
}
