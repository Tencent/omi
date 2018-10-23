import { tag, WeElement } from 'omi'
import '../style/global/index.css'
import style from '../style/_pagination.scss'

@tag('el-pagination', true)
class ElPagination extends WeElement {

    css(){
        return style
    }
    install() {
        this.data.value = this.props.value
    }

    render(props) {
        return (
            <div class="el-pagination is-background">
                <button type="button" class="btn-prev" disabled="disabled">
                    <i class="el-icon el-icon-arrow-left"></i></button>
                <ul class="el-pager">
                    <li class="number active">1</li>
                    <li class="number">2</li>
                    <li class="number">3</li>
                    <li class="number">4</li>
                    <li class="number">5</li>
                    <li class="number">6</li>
                    <li class="el-icon more btn-quicknext el-icon-more"></li>
                    <li class="number">100</li>
                </ul>
                <button type="button" class="btn-next">
                    <i class="el-icon el-icon-arrow-right"></i>
                </button>
            </div>
        )
    }
}

