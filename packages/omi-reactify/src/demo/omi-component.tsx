import { tag, h, Component } from 'omi'
import React from 'react'

@tag('omi-component-demo')
class OmiComponentDemo extends Component {
  static propTypes = {
    show: Boolean,
    label: String,
    complex: Object,
    content: [String, Number, Object, Function],
    onClick: Function,
  }

  static defaultProps = {
    show: true,
    label: 'Omi Component',
    complex: { name: 'complex' },
  }

  onClick = (e:Event) =>{
    e.stopImmediatePropagation();
    this.fire('click', { e, context: this });
  }

  render(props: any) {
    const { show, label, content, complex } = props
    return show ?  (
      <div onClick={this.onClick}>
        <div class='label'>{label}</div>
        <div class='complex'>{complex.name}</div>
        <slot>{content}</slot>
      </div>
    ) : null
  }
}

export default OmiComponentDemo