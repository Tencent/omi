import { tag, WeElement, h, extractClass, getHost } from 'omi'
import * as css from './index.scss'
import { domReady }from '../util/dom-ready'
//@ts-ignore
import '../theme.ts'

interface Props {
  expand: boolean
}

@tag('m-expansion')
export default class Expansion extends WeElement<Props> {
  static css = css

  static propTypes = {
    expand: Boolean
  }

  preHeight: number

  receiveProps(){
    const rect = this.shadowRoot.querySelector('div').getBoundingClientRect()
    if(this.props.expand){
      this.style.height =  rect.height + 'px'
    }else{
      this.style.height = '0px'
    }
    return false
  }

  setAttribute(attr, value){
    if(attr.toLowerCase() === 'expand'){
      this.style.height = this.shadowRoot.querySelector('div').getBoundingClientRect().height + 'px'
    }else{
      //@ts-ignore
      super.pureSetAttribute(attr)
    }
  }
  

  removeAttribute(attr){
    if(attr === 'expand'){
      this.style.height = '0px'
    }else{
      //@ts-ignore
      super.pureRemoveAttribute(attr)
    }
  }
  
  installed() {
    domReady(()=>{
      const rect = this.shadowRoot.querySelector('div').getBoundingClientRect()
      
      if(!this.props.expand){
        this.style.height = '0px'
      }else{
        this.style.height = rect.height +'px'
      }
    })
  }



  render(props) {
    return (
      <div>
        <slot />
      </div>
    )
  }
}
