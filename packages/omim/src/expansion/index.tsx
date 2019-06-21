import { tag, WeElement, h, extractClass, getHost } from 'omi'
import * as css from './index.scss'

//@ts-ignore
import '../theme.ts'

interface Props {
  expand: boolean
}

interface Data {}

@tag('m-expansion')
export default class Expansion extends WeElement<Props, Data> {
  static css = css

  static propTypes = {
    expand: Boolean
  }

  _host: HTMLElement
  preHeight: number

  receiveProps(){
    const rect = this._host.getBoundingClientRect()
    if(this.props.expand){
      this.style.height =  rect.height + 'px'
    }else{
      this.style.height = '0px'
    }
    return false
  }

  installed() {
    const rect = this._host.getBoundingClientRect()
    if(!this.props.expand){
      this.style.height = '0px'
    }else{
      this.style.height = rect.height +'px'
    }
  }



  render(props) {
    return (
      <div
        {...extractClass(props, 'm-expansion')}
      >
        <slot />
      </div>
    )
  }
}
