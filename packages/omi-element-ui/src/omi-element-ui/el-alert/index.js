import { tag, WeElement } from 'omi'
import '../style/global/index.css'
import style from '../style/_alert.scss'

@tag('el-alert', true)
class ElAlert extends WeElement {

    css() {
        return style
    }

    install(){
        this.data.visible = true
    }

    close = () => {
        this.data.visible = false
        this.update()

        this.props.onClose && this.props.onClose()
    }

    render(props, data) {

        let mainClassStr = 'el-alert'
        let iconClassStr = 'el-alert__icon'
        let titleClassStr = 'el-alert__title'
        let displayStr = 'display: '

        if (props.type) {
            mainClassStr += ` el-alert--${props.type}`
        }
        if (props.center) {
            mainClassStr += `  is-center`
        }

        if(props.showIcon){
            iconClassStr += " el-icon-" + props.type
        }
        
        if(props.description){
            titleClassStr += ` is-bold`
            iconClassStr += ` is-big`
        }

        if(data.visible){
            displayStr += ` flex`
        }
        else {
            displayStr += ` none`
        }

        return (
           <div class={mainClassStr} role="alert" style={displayStr}>
            {props.showIcon && <i class={iconClassStr}></i>}
                
              <div class="el-alert__content">
                <span class={titleClassStr}>{props.title}</span>

                {props.description && <p class="el-alert__description">{props.description}</p>}

                {!props.closable && !props.closeText && <i class="el-alert__closebtn el-icon-close" onClick={this.close} title=""></i>}

                {props.closeText && <i class="el-alert__closebtn is-customed" onClick={this.close} title="">{props.closeText}</i>}

               </div>
            </div>
        )
    }
    
}