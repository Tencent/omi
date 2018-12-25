import { define, WeElement } from 'omi'
import css from './_index.css'

define('o-button', class extends WeElement {
  css() {
    return css
  }

  onClick = (e)=>{
    this.props.onClick(e)
    e.stopPropagation()
  }

  render(props, data) {
    return <a href="javascript:;" onClick={this.onClick} class={`o-btn ${props.type||'default'}`}>{props.children[0]}</a>
  }
})
