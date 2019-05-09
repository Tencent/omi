import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'
// import {MDCTopAppBar} from '@material/top-app-bar';
import '../icon'

// @ts-ignore
// import { htmlToVdom } from '../util.ts'

interface Props {
  title: string,
  short: boolean,
  shortCollapsed: boolean,
  prominent: boolean,
  dense: boolean,
  fixed: boolean,
  navigationIcon: object,
  actionItems: Array<object>
}

interface Data {

}

@tag('m-top-app-bar')
export default class topAppBar extends WeElement<Props, Data>{
  static css = css

  static propTypes = {
    title: String,
    short: Boolean,
    shortCollapsed: Boolean,
    prominent: Boolean,
    dense: Boolean,
    fixed: Boolean,
    navigationIcon: Object,
    actionItems: Array
  }
  
  installed() {
    
  }
  
  render(props) {
    return (
      <header {...extractClass(props, 'mdc-top-app-bar', {
        
      })}>
        <div class="mdc-top-app-bar__row">
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <button class="material-icons mdc-top-app-bar__navigation-icon mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" style="--mdc-ripple-fg-size:28px; --mdc-ripple-fg-scale:1.71429; --mdc-ripple-left:10px; --mdc-ripple-top:10px;">menu</button>
            <span class="mdc-top-app-bar__title">Standard</span>
          </section>
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
            <button class="material-icons mdc-top-app-bar__action-item mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" aria-label="Download" style="--mdc-ripple-fg-size:28px; --mdc-ripple-fg-scale:1.71429; --mdc-ripple-left:10px; --mdc-ripple-top:10px;">file_download</button>
            <button class="material-icons mdc-top-app-bar__action-item mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" aria-label="Print this page" style="--mdc-ripple-fg-size:28px; --mdc-ripple-fg-scale:1.71429; --mdc-ripple-left:10px; --mdc-ripple-top:10px;">print</button>
            <button class="material-icons mdc-top-app-bar__action-item mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" aria-label="Bookmark this page" style="--mdc-ripple-fg-size:28px; --mdc-ripple-fg-scale:1.71429; --mdc-ripple-left:10px; --mdc-ripple-top:10px;">bookmark</button>
          </section>
        </div>
      </header>
    )
  }
}
