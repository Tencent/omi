import { tag, WeElement } from 'omi'
import '../style/global/index.css'
import style from '../style/_badge.scss'

@tag('el-badge', true)
class ElBadge extends WeElement {
    css () {
        return style
    }

    content () {
        if (this.props.isDot) return;
        const value = this.props.value;
        const max = this.props.max;
        if (typeof value === 'number' && typeof max === 'number') {
            return max < value ? `${max}+` : value;
        }
        return value;
    }

    render (props, data) {
        let className = 'el-badge__content'
        let sup
        if (this.props.isDot) {
            className += ' is-dot'
        }
        if (this.props.children) {
            className += ' is-fixed'
        }
        if (!this.props.hidden && (this.content() || this.props.isDot)) {
            sup = <sup className={className}>{this.content()}</sup>
        }
        return (
            <div class="el-badge">
                <div class="el-badge item">
                    <slot></slot>
                    { sup }
                </div>
            </div>
        )
    }
}