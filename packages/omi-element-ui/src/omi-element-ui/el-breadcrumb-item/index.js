import { tag, WeElement } from 'omi'
import '../style/global/index.css'
import style from '../style/breadcrumb-item.scss'

@tag('el-breadcrumb-item', true)
class ElBreadcrumbItem extends WeElement {

    css() {
        return style
    }

    install() {
        this._initData()
    }

    _initData() {
        if (this.parentNode.nodeName === 'EL-BREADCRUMB') {
            console.log(this.parentNode.data.separator);
            this.data.separator = this.parentNode.data.separator
        }
    }

    render(props, data) {
        console.log(props, data);
        let {separator} = props;
        return (
            <span class="el-breadcrumb__item">
                <span class="el-breadcrumb__inner is-link">
                  <slot></slot>
                </span>
                <i class="el-breadcrumb__separator" class="separatorClass"></i>
                <span v-else class="el-breadcrumb__separator" role="presentation">
                  {{separator}}
                </span>
            </span>
        )
      
    }
}