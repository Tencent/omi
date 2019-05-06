import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
// import { MDCDialogAdapter } from '@material/dialog'
import '../icon'
import '../button'

interface Props {
  show: boolean,
  scrollable: boolean,
  title: string,
  message: string,
  cancelButton: object,
  confirmButton: object
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
    cancelButton: Object,
    confirmButton: Object
  }

  installed() {
    
  }
  
  render(props) {
    return (
      <div id='confirmation-dialog' {...extractClass(props, 'mdc-dialog', {
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
            <footer class='mdc-dialog__actions'>
              {(props.cancelButton) && <m-button ripple {...props.cancelButton}>{props.cancelButton.text}</m-button>}
              {(props.confirmButton) && <m-button ripple {...props.confirmButton}>{props.confirmButton.text}</m-button>}
            </footer>
          </div>
        </div>
      </div>
    )
  }
}
