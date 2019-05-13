import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'

interface Props {
  
}

interface Data {

}

@tag('m-drawer')
export default class Drawer extends WeElement<Props, Data>{
  static css = css

  static propTypes = {
    
  }

  updated() {
    
  }
  
  installed() {

  }

  render(props) {
    return (
      <aside {...extractClass(props, 'mdc-drawer', {
        
      })}>
        
      </aside>
    )
  }
}
