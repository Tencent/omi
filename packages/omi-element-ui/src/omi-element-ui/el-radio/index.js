import { tag, WeElement } from 'omi'
import style from '../style/_radio.scss'

@tag('el-radio', true)
class ElRadio extends WeElement {
    css() {
        return style
    }

    install() {
        this.checked = this.props.checked
        this.data.value = 1
        if (this.parentNode.nodeName === 'EL-RADIO-GROUP') {
        }

    }

    render(props) {
        let classStr = 'el-radio'
        let checked = ''
        if (this.checked) {
            checked = 'is-checked'
            classStr += ' is-checked'
        }

        return (
            <label role="radio" aria-checked="true" tabindex="0" class={classStr} >
                <span class={`el-radio__input ${checked}`} onClick={this.onClick}>
                    <span class="el-radio__inner"></span>
                    <input type="radio" aria-hidden="true" tabindex="-1" class="el-radio__original" value={props.value} />
                </span>
                <span class="el-radio__label"><slot></slot></span>
            </label>
        )
    }

    onClick = () => {
        this.checked = !this.checked
        this.update()
    }
}