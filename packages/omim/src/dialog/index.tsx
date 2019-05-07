import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
// import { MDCDialogAdapter } from '@material/dialog'
import '../button'


interface Props {
  show: boolean,
  scrollable: boolean,
  title: string,
  message: string,
  cancelbutton: object,
  confirmbutton: object
}

interface Data {

}

@tag('m-dialog')
export default class Dialog extends WeElement<Props, Data>{
  static css = css

  static propTypes = {
    show: Boolean,
    scrollable: Boolean,
    title: String,
    message: String,
    cancelbutton: Object,
    confirmbutton: Object
  }

  installed() {
    
  }
  
  render(props) {
    return (
      <div {...extractClass(props, 'mdc-dialog', {
        'mdc-dialog--open': props.show,
        'mdc-dialog--scrollable': props.scrollable
      })}>
        <div class='mdc-dialog__scrim'></div>
        <div class='mdc-dialog__container'>
          <div class='mdc-dialog__surface'>
            {(props.title) && <h2 class='mdc-dialog__title'>{props.title}</h2>}
            <section class='mdc-dialog__content'>
              {props.message}
            </section>
            {
              ((props.cancelbutton) && (props.confirmbutton)) &&
              <footer class='mdc-dialog__actions'>
                {(props.cancelbutton) && <m-button ripple {...props.cancelbutton}>{props.cancelbutton.text}</m-button>}
                {(props.confirmbutton) && <m-button ripple {...props.confirmbutton}>{props.confirmbutton.text}</m-button>}
              </footer>
            }
          </div>
        </div>
      </div>
    )
  }
}
