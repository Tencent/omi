import { tag, Component } from 'omi'
import React from 'react'
import * as l from 'lodash';

@tag('omi-component-demo')
class OmiComponentDemo extends Component {
  static propTypes = {
    show: Boolean,
    label: String,
    complex: Object,
    content: [String, Number, Object, Function],
    onMockClick: Function,
    camelCase: String,
    mockFunction: [Object, Function]
  }

  static defaultProps = {
    show: true,
    label: 'Omi Component',
    complex: { name: 'complex' },
    mockFunction: (name: string) => {}
  }

  c = l.debounce((dd) => {
    console.log('dd', dd.firstChild)
  }, 1000)

  onClick = (e: any) => {
    e.stopImmediatePropagation();
    this.fire('mockClick', { e, context: this });
  }

  render(props: any) {
    const { show, label, content, complex, camelCase = '', mockFunction } = props
    const dd = mockFunction?.('你好')

    console.log(dd.firstChild);

    // 使用debounce是因为在react中会多次调用
    this.c(dd);
    return show ? (
      <div>
        <div className='label'>{label}</div>
        <div className='complex' onClick={this.onClick}>{complex.name}</div>
        <slot>{content}</slot>
        <div>{camelCase}</div>
        {dd ? dd : null}
      </div>
    ) : null
  }
}

export default OmiComponentDemo