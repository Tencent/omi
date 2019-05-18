import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'
import { MDCSnackbar } from '@material/snackbar';

interface Props {
  show?: boolean,
  stacked?: boolean,
  msg: string,
  buttonText?: string,
  leading?: boolean
}

interface Data {

}


@tag('m-snackbar')
export default class Snackbar extends WeElement<Props, Data>{
  static css = css

  static defaultProps = {
    
  }

  static propTypes = {
    show: Boolean,
    stacked: Boolean,
    msg: String,
    buttonText: String,
    leading: Boolean
  }

  snackbar: MDCSnackbar

  installed() {

    const snackbar = new MDCSnackbar(this.shadowRoot.querySelector('.mdc-snackbar'))

    snackbar.listen('MDCSnackbar:opened', () => {
      this.fire('opened')
    })

    snackbar.listen('MDCSnackbar:closed', () => {
      this.fire('closed')

			//直接改掉下次需要 diff 的 attr, html 模式下初始化没有这个属性？？
      this['__omiattr_'] && (this['__omiattr_'].show = false)

    })

    this.snackbar = snackbar
    if (this.props.show) {
      this.snackbar.open()
    } else {
      this.snackbar.close()
    }
  }

  updated() {
    if (this.props.show) {
      this.snackbar.open()
    } else {
      this.snackbar.close()
    }
  }

  onButtonClick = (evt: Event) => {
    this.fire('buttonClick')
  }

  onIconButtonClick = (evt: Event) => {
    this.fire('iconButtonClick')
  }

  render(props) {
    return (
      <div {...extractClass(props, 'mdc-snackbar', {
        'mdc-snackbar--stacked': props.stacked,
        'mdc-snackbar--leading': props.leading
      })}>
        <div class="mdc-snackbar__surface">
          <div class="mdc-snackbar__label"
            role="status"
            aria-live="polite">
            {props.msg}
          </div>
          <div class="mdc-snackbar__actions">
            <button onClick={this.onButtonClick} type="button" class="mdc-button mdc-snackbar__action">{props.buttonText}</button>
            <button onClick={this.onIconButtonClick} class="mdc-icon-button mdc-snackbar__dismiss material-icons" title="Dismiss" style="color:white;">close</button>
          </div>
        </div>
      </div>
    )
  }
}
