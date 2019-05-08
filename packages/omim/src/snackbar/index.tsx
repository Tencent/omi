import { tag, WeElement, h, extractClass, classNames } from 'omi'
import * as css from './index.scss'
import { MDCSnackbar } from '@material/snackbar';

interface Props {
  show?: boolean
}

interface Data {

}


@tag('m-snackbar')
export default class Snackbar extends WeElement<Props, Data>{
  static css = css

  static defaultProps = {
    show: false
  }

  static propTypes = {
    show: Boolean
  }

  snackbar: MDCSnackbar
  installed() {

    const snackbar = new MDCSnackbar(this.shadowRoot.querySelector('.mdc-snackbar'));
  
    snackbar.listen('MDCSnackbar:open', () => {
      this.fire('open')
    })
    this.snackbar = snackbar
    if(this.props.show){
      this.snackbar.open()
    }
  }


  render(props) {
    return (
      <div class="mdc-snackbar">
        <div class="mdc-snackbar__surface">
          <div class="mdc-snackbar__label"
            role="status"
            aria-live="polite">
            Can't send photo. Retry in 5 seconds.
          </div>
          <div class="mdc-snackbar__actions">
            <button type="button" class="mdc-button mdc-snackbar__action">Retry</button>
          </div>
        </div>
      </div>
    )
  }
}
