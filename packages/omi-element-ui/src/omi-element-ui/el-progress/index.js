import { tag, WeElement } from 'omi'
import '../style/global/index.css'
import style from '../style/_progress.scss'

@tag('el-progress', true)
class ElProgress extends WeElement {

    css() {
        return style
    }

    install() {
        this.data.value = this.props.value
    }

    minus = () => {

        this.data.value -= this.props.step
        this.data.mDisabled = this.data.value <= this.props.min
        if (this.data.mDisabled) {
            this.data.value = this.props.min
        }

        this.data.pDisabled = this.data.value >= this.props.max
        this.update()
    }

    plus = () => {
        this.data.value += this.props.step
        this.data.pDisabled = this.data.value >= this.props.max

        if (this.data.pDisabled) {
            this.data.value = this.props.max
        }
        this.data.mDisabled = this.data.value <= this.props.min

        this.update()
    }

    render(props, data) {
        return (
            <div class="el-input-number">
                <span role="button" class={"el-input-number__decrease" + (data.mDisabled ? " is-disabled" : '')} onClick={this.minus}>
                    <i class="el-icon-minus"></i>
                </span>
                <span role="button" class={"el-input-number__increase" + (data.pDisabled ? " is-disabled" : '')} onClick={this.plus}>
                    <i class="el-icon-plus"></i>
                </span>
                <div class="el-input">
                    <input type="text" autocomplete="off" aria-label="描述文字" max="10" min="1" class="el-input__inner" role="spinbutton" aria-valuemax="10" aria-valuemin="1" aria-valuenow="1" value={data.value} aria-disabled="undefined" />
                </div>
            </div>
        )
    }
}