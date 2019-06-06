import { tag, WeElement, h } from 'omi'

interface Props {
}

interface Data {

}

@tag('m-transition')
export default class Transition extends WeElement<Props, Data>{

  static propTypes = {
  }

  install() {
    this.props.css = slotted(this.props.css)
  }

  render(props) {
    // console.log(this.childNodes[0] ===this.children[0])

    if (props.in) {
      //@ts-ignore
      this.childNodes[0].classList.remove("exit-active")
      //@ts-ignore
      this.childNodes[0].classList.remove("enter")
      //@ts-ignore
      this.childNodes[0].classList.add("exit")
      //@ts-ignore
      this.childNodes[0].classList.add("enter-active")
    } else {
      //@ts-ignore
      this.childNodes[0].classList.remove("enter-active")
      //@ts-ignore
      this.childNodes[0].classList.remove("exit")
      //@ts-ignore
      this.childNodes[0].classList.add("enter")
      //@ts-ignore
      this.childNodes[0].classList.add("exit-active")
    }

    return (
      <slot></slot>
    )
  }
}

function slotted(css) {
  /**
   * Example:
   *
   * .classname::pesudo { color:red }
   *
   * g1 is normal selector `.classname`
   * g2 is pesudo class or pesudo element
   * g3 is the suffix
   */
  css = css.replace(new RegExp('([^\r\n,{}:]+)(:[^\r\n,{}]+)?(,(?=[^{}]*{)|\s*{)', 'g'), (g0, g1, g2, g3) => {
    if (typeof g2 === 'undefined') {
      g2 = ''
    }

    return '::slotted(' + g1 + ')' + g2 + g3
  })

  return css
}
