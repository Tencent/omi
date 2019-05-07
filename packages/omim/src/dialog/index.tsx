import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
// import { MDCDialogAdapter } from '@material/dialog'
import '../button'

// @ts-ignore
import { htmlToVdom } from '../util.ts'

interface Props {
  show: boolean,
  scrollable: boolean,
  scrimcancel: boolean,
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
    scrimcancel: Boolean,  //无法关闭show属性问题未解决(现在在框架中使用需要在外部打开dialog时设置关闭所有其它dialog，原生js使用没问题)
    title: String,
    message: String,
    cancelbutton: Object,
    confirmbutton: Object
  }

  installed() {
    
  }

  showDialog = true

  onScrimCancel = (e) => {
    this.showDialog = false
    this.update()
    this.showDialog = true
  }
  
  render(props) {
    return (
      <div {...extractClass(props, 'mdc-dialog', {
        'mdc-dialog--open': props.show && this.showDialog,
        'mdc-dialog--scrollable': props.scrollable
      })}>
        {/* {console.log(props)}
        {console.log(props.title+":"+props.show+"---"+this.showDialog)} */}
        {(props.scrimcancel) ? <div class='mdc-dialog__scrim' onClick={this.onScrimCancel}></div> : <div class='mdc-dialog__scrim'></div> }
        <div class='mdc-dialog__container'>
          <div class='mdc-dialog__surface'>
            {(props.title) && <h2 class='mdc-dialog__title'>{props.title}</h2>}
            <section class='mdc-dialog__content'>
              {typeof props.message === 'string' ? htmlToVdom(props.message) : props.message}
            </section>
            {
              ((props.cancelbutton) || (props.confirmbutton)) &&
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
