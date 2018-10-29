import { WeElement, tag, getHost } from 'omi'
import style from '../style/_card.scss'

@tag('el-card', true)
class ElCard extends WeElement {
  
    css() {
        let pCss = getHost(this).css
        
        return style + '  ' + pCss()
    }

    install(){
        if (!this.data.header) {
          let dom = Array.prototype.slice.call(this.children)
          dom.map((item)=>{
              if (item.getAttribute('slot') === 'header'){
                  this.data.header = item
                  return 
              }
          })
        }

    }

    render(props, data) {
        let { style, shadow, bodyStyle } = props
        let { header } = data
        let classStr = 'el-card ' + (this.props.class ? this.props.class : '')
        return (
            <div class={shadow ? classStr + ' is-' + shadow + '-shadow' : classStr + ' is-always-shadow'}>
                {
                    header && (<div class="el-card__header">
                                  <slot name="header">{ header }</slot>
                               </div>)
                }
                <div class="el-card__body" style={bodyStyle}>
                    <slot></slot>
                </div>
            </div>
        )
    }
}
