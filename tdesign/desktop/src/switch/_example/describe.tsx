import { h, tag, WeElement } from 'omi'

import '../index'
import '../../space/index'
import '../../icon/close'
import '../../icon/check'

@tag('switch-describe')
export default class SwitchDescribe extends WeElement {
  render() {
    const renderActiveContent = () => <t-icon-check />
    const renderInactiveContent = () => <t-icon-close />
    return (
      <t-space direction="vertical">
        <t-space>
          <t-switch size="large" label={['开', '关']} />
          <t-switch size="large" defaultValue label={['开', '关']} />
        </t-space>
        <t-space>
          <t-switch size="large" label={[renderActiveContent(), renderInactiveContent()]} />
          <t-switch size="large" defaultValue label={[renderActiveContent(), renderInactiveContent()]} />
        </t-space>
      </t-space>
    )
  }
}
