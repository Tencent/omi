import { define, WeElement } from 'omi'
import css from './_index.css'

define('o-button', class extends WeElement {
  css() {
    return css
  }

  onClick = (e) => {
    this.props.onClick && this.props.onClick(e)
    //e.stopPropagation()
  }

  render() {
    const props = {}

    if (!this.props.disabled) {
      props.onClick = this.onClick
      props.class = `o-button ${this.props.type || 'default'}`
    } else {
      props.class = 'o-button disabled'

    }
    return <a href="javascript:;" {...props}>{this.props.children[0]}</a>
  }
})
