import { tag, Component } from 'omi'
import React from 'react'

@tag('omi-component-demo')
class OmiComponentDemo extends Component {
  static propTypes = {
    show: Boolean,
    label: String,
    complex: Object,
    content: [String, Number, Object, Function],
    onMockClick: Function,
    camelCase: String
  }

  static defaultProps = {
    show: true,
    label: 'Omi Component',
    complex: { name: 'complex' },
  }

  onClick = (e: any) => {
    e.stopImmediatePropagation();
    this.fire('mockClick', { e, context: this });
  }

  render(props: any) {
    const { show, label, content, complex, camelCase = '' } = props
    return show ? (
      <div onClick={this.onClick}>
        <div className='label'>{label}</div>
        <div className='complex'>{complex.name}</div>
        <slot>{content}</slot>
        <div>{camelCase}</div>
      </div>
    ) : null
  }
}

export default OmiComponentDemo