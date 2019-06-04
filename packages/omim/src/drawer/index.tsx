import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'

//@ts-ignore
import '../theme.ts'

interface Props {
  position?: 'left' | 'right' | 'top' | 'bottom',
  show?: boolean
}

interface Data {

}


@tag('m-drawer')
export default class Drawer extends WeElement<Props, Data>{
  static css = css

  static propTypes = {
    show: Boolean,
    position: String

  }

  static defaultProps = {

  }

  onMaskClick = () => {
    this.fire('close')
  }

  render(props) {
 
    return (
      <div {...extractClass(props,'m-drawer',{
        'm-drawer-show': props.show
      })}>
        <div class='ctn' style={`transform: ${this._getTransfrom(props.position)}`}><slot ></slot></div>
        <div class="mask" onClick={this.onMaskClick}></div>
      </div>
    )
  }

  _getTransfrom(position){
    if(position === 'left'){
      return  `translateX(${this.props.show ? '0' : '-100'}%);top:0;`
    }
    if(position === 'right'){
      return  `translateX(${this.props.show ? '0' : '100'}%);right:0;top:0;`
    }

    if(position === 'top'){
      return  `translateY(${this.props.show ? '0' : '-100'}%);top:0;`
    }

    if(position === 'bottom'){
      return  `translateY(${this.props.show ? '0' : '100'}%);bottom:0;`
    }
  }
}
