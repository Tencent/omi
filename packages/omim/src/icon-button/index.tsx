import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'
import { MDCRipple } from '@material/ripple'
import { MDCIconButtonToggle } from '@material/icon-button'

// @ts-ignore
import { extract, htmlToVdom } from '../util.ts'

//@ts-ignore
import { theme } from '../theme.ts'

interface Props {
  ripple?: boolean,
  toggle?: object,
  icons: object,
  icon: string,
  imgs: object,
  svg: object,
  color: string,
  disabled: boolean
}

interface Data {

}

@tag('m-icon-button')
export default class IconButton extends WeElement<Props, Data>{
  static css = theme() + css

  static defaultProps = {
    ripple: true
  }

  static propTypes = {
    ripple: Boolean,
    toggle: Object,
    icons: Object,
    icon: String,
    imgs: Object,
    svg: Object,
    color: String,
    disabled: Boolean
  }
  install() {
    document.addEventListener('DOMContentLoaded', () => {
      this.update()

      const root = this.shadowRoot.querySelector('.mdc-icon-button')
      if (this.props.ripple) {
        const r = new MDCRipple(root)
        r.unbounded = true
      }

      if (this.props.icons || this.props.imgs || (this.props.children && this.props.children[0] && this.props.children[1])) {
        const toggleButton = new MDCIconButtonToggle(root)
        toggleButton.listen('MDCIconButtonToggle:change', (evt: CustomEvent) => {
          this.fire('change', { isOn: evt.detail.isOn })
        })

      }
    })
  }

  render(props) {
    if(!props.children){
      props.children = htmlToVdom(this.innerHTML)
    }
    //svg
    if (props.children && props.children[0] && props.children[1]) {
      props.children[0].attributes.class = 'mdc-icon-button__icon'
      props.children[1].attributes.class = 'mdc-icon-button__icon mdc-icon-button__icon--on'
      return <button style={`color:${props.color};`} {...extractClass(props, 'mdc-icon-button material-icons')} {...extract(props, ['disabled'])}>
        {props.children}
      </button>
    }
    return (
      <button style={`color:${props.color};`} {...extractClass(props, 'mdc-icon-button material-icons')} {...extract(props, ['disabled'])}>
        {props.icon ? props.icon : (props.icons ? [
          <i class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on">{props.icons[0]}</i>,
          <i class="material-icons mdc-icon-button__icon">{props.icons[1]}</i>
        ] : (props.imgs && [
          <img src={props.imgs[0]} class="mdc-icon-button__icon" />,
          <img src={props.imgs[1]} class="mdc-icon-button__icon mdc-icon-button__icon--on" />
        ]))}


      </button>
    )
  }
}
