import { tag, WeElement } from 'omi'
import '../style/global/index.css'
import style from '../style/_progress.scss'

@tag('el-progress', true)
class ElProgress extends WeElement {

    css() {
        return style
    }

    install() {

        this.data.percentage = this.props.percentage
        this.data.color = this.props.color
        this.data.success = this.props.success
        this.data.error = this.props.error
    }

    render(props, data) {
        if (props.type === 'circle') {
            return this.renderCircel(props, data)
        }

        let barStyle = `width:${data.percentage}%`
        if (data.color) {
            barStyle += `;background-color:${data.color};`
        }
        let text = data.percentage + '%'
        if (data.success) {
            text = <i class="el-icon-circle-check"></i>
        }
        if (data.error) {
            text = <i class="el-icon-circle-close"></i>
        }
        let innerText = ''
        if (props.textInside) {
            innerText = <div class="el-progress-bar__innerText">{data.percentage + '%'}</div>
        }

        return (
            <div
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
                class={`el-progress el-progress--line${data.success ? ' is-success' : ''}${data.error ? ' is-exception' : ''}${props.textInside ? ' el-progress--text-inside' : ''}`}>
                <div class="el-progress-bar">
                    <div class="el-progress-bar__outer" style={`height:${props.strokeWidth || 6}px`}>
                        <div class="el-progress-bar__inner" style={barStyle}>{innerText}</div>
                    </div>
                </div>
                {!props.textInside && <div class="el-progress__text" style="font-size: 14.4px;">{text}</div>}
            </div>
        )
    }

    renderCircel(props, data) {
        this.strokeWidth = props.strokeWidth || 4.8
        this.width = props.width || 100
        this.relativeStrokeWidth = (this.strokeWidth / this.width * 100).toFixed(1)
        this.perimeter = this.cptPerimeter()
        let color = data.color || '#409EFF'
        if (data.error) {
            color = '#f56c6c'
        }
        if (data.success) {
            color = '#67c23a'
        }
        return (
            <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" class="el-progress el-progress--circle"><div class="el-progress-circle" style="height: 126px; width: 126px;"><svg viewBox="0 0 100 100">
                <path d="M 50 50 m 0 -47 a 47 47 0 1 1 0 94 a 47 47 0 1 1 0 -94" stroke="#e5e9f2" stroke-width="4.8" fill="none" class="el-progress-circle__track"></path>
                <path d="M 50 50 m 0 -47 a 47 47 0 1 1 0 94 a 47 47 0 1 1 0 -94" stroke-linecap="round" stroke={color} stroke-width="4.8" fill="none" class="el-progress-circle__path" style={`stroke-dasharray:${this.perimeter}px,${this.perimeter}px; stroke-dashoffset: ${(1 - this.data.percentage / 100) * this.perimeter}px; transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease 0s;`}></path></svg></div>
                <div class="el-progress__text" style="font-size: 16px;">{data.percentage}%</div>
            </div>
        )
    }

    cptPerimeter() {
        const radius = 50 - parseFloat(this.relativeStrokeWidth) / 2;
        return 2 * Math.PI * radius;
    }

}