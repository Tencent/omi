import { tag, WeElement } from 'omi'
import '../style/global/index.css'
import style from '../style/_button.scss'

@tag('el-button', true)
class ElButton extends WeElement {

    css() {
        return style
    }

    render(props, data) {
        let classStr = 'el-button'
        if (props.type) {
            classStr += ` el-button--${props.type}`
        }
        if (props.plain) {
            classStr += ` is-plain`
        }
        if (props.round) {
            classStr += ` is-round`
        }
        if (props.circle) {
            classStr += ` is-circle`
        }
        if (props.disabled) {
            classStr += ` is-disabled`
        }

        if(typeof data.position=== 'string'){
            classStr+= " "+data.position
        }
       
        if(props.size){
            classStr+=   " el-button--"+props.size
        }
        if(props.iconRight){
            return (
                <button onClick={this.onClick} class={classStr}>
                    <slot></slot>
                    {props.icon&&<i class={props.icon}></i>}
                </button>
            )
        }

        return (
            <button onClick={this.onClick} class={classStr}>
                {props.icon&&<i class={props.icon}></i>}
                <slot></slot>
            </button>
        )
    }

    onClick = (evt) => {
        if (!this.props.disabled) {
            this.props.onClick && this.props.onClick(evt)
        }
        evt.stopPropagation()
    }

    install(){
        if(this.parentNode.nodeName === 'EL-BUTTON-GROUP'){
            for(let i=0,len =this.parentNode.childNodes.length;i<len;i++ ){
                if(this.parentNode.childNodes[i]===this){
                    if(i ===0){
                        this.data.position = 'first'
                    }else if(i===len-1){
                        this.data.position = 'last'
                    }else {
                        this.data.position = 'between'
                    }
                  
                    break
                }
            }
        }
    }
}