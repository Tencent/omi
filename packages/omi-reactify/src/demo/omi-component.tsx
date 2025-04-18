import { tag, Component, createRef, signal, render } from 'omi'
import React from 'react'

@tag('omi-component-demo')
class OmiComponentDemo extends Component {
  static propTypes = {
    show: Boolean,
    label: String,
    complex: Object,
    content: [String, Number, Object, Function],
    onMockClick: Function,
    camelCase: String,
    renderFunction: [Function, Object],
  }

  static defaultProps = {
    show: true,
    label: 'Omi Component',
    complex: { name: 'complex' },
    renderFunction: (name: string) => {}
  }

  reactRef = createRef() as any;
  renderReacted = false;
  txt = '';


  renderReact = (txt?) => {
    if(this.txt === txt){
      return;
    }

    this.txt = txt;

    const r = (this.props as any).renderFunction?.({name: txt});

    if(this.reactRef.current){
      //  移除所有现有子元素
      while (this.reactRef.current.firstChild) {
        this.reactRef.current.removeChild(this.reactRef.current.firstChild);
      }

      (this.reactRef.current as any).appendChild(r);
    }
  }

  onClick = (e: any) => {
    e.stopImmediatePropagation();
    this.fire('mockClick', { e, context: this });
    this.renderReact('你好');
  }

  // updated(): void {
  //   Promise.resolve().then(() => {
  //     this.renderReact({name: '你好'})
  //   })
  // }

  ready(): void {
    this.renderReact('你好');
    // const r = (this.props as any).renderFooter?.({name: '你好'});
    // r => DOM
  }

  render(props: any) {
    console.log('===endet');
    const { show, label, content, complex, camelCase = '' } = props
    return show ? (
      <div>
        <div className='label'>{label}</div>
        <div className='complex' onClick={this.onClick}>{complex.name}</div>
        <slot>{content}</slot>
        <div>{camelCase}</div>
        <div ref={this.reactRef}></div>
      </div>
    ) : null
  }
}

export default OmiComponentDemo