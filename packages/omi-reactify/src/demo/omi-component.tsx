import { tag, Component, createRef, signal } from 'omi'
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
    renderFunction: [Object, Function]
  }

  static defaultProps = {
    show: true,
    label: 'Omi Component',
    complex: { name: 'complex' },
    renderFunction: (name: string) => {}
  }

  reactRef = createRef<HTMLElement>();
  renderReacted = false;


  renderReact = (txt?) =>{
    const r = typeof (this.props as any).renderFunction === 'function' 
      ? (this.props as any).renderFunction?.(txt) 
      : (this.props as any).renderFunction;

    if(this.reactRef.current){
      //  移除所有现有子元素
      while (this.reactRef.current.firstChild) {
        this.reactRef.current.removeChild(this.reactRef.current.firstChild);
      }
    }

    (this.reactRef.current as any).appendChild(r);
  }

  onClick = (e: any) => {
    e.stopImmediatePropagation();
    this.fire('mockClick', { e, context: this });
    this.renderReact({name: '我好'});
  }

  ready(): void {
    this.renderReact({name: '你好'})
  }

  updated(): void {
    if(this.renderReacted) return;
    this.renderReacted = true;
    Promise.resolve().then(() => {
      this.renderReact()
      this.renderReacted = false;
    })
    
  }

  render(props: any) {
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