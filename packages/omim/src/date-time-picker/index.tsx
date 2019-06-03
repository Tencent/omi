import Picker from './md-date-time-picker/js/mdDateTimePicker'
import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'

//@ts-ignore
import '../theme.ts'

interface Props {

}

interface Data {

}


@tag('m-date-time-picker')
export default class DateTimePicker extends WeElement<Props, Data>{
  static css = css

  static defaultProps = {
 
  }

  static propTypes = {

  }

  installed(){
    //@ts-ignore
    var dialog = new Picker({
      type: 'time',
      root: this.shadowRoot.querySelector('.m-m-date-time-picker')
    })
      
  }

  render(props) {
    return (
      <div {...extractClass(props, 'm-m-date-time-picker')}>
        
      </div>
    )
  }
}
