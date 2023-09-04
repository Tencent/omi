import { h, tag, WeElement } from 'omi'

import '../index'


@tag('base')
export default class Base extends WeElement {
  render() {
    return (
      <div style={{ margin: '50px' }}>
        <t-tag closable={false}
        disabled={false}
        icon={undefined}
        shape="square"
        size="medium"
        theme="default"
        variant="dark">标签</t-tag>
      </div>
    )
  }
}


