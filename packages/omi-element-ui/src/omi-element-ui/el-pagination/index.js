import { tag, WeElement } from 'omi'
import '../style/global/index.css'
import style from '../style/_pagination.scss'

@tag('el-pagination', true)
class ElPagination extends WeElement {

    css() {
        return style
    }

    install() {
        this.data = Object.assign({
            total: 0,
            pageSize: 10,
            numDisplay: 5,
            currentPage: 0,
            numEdge: 3,
            linkTo: '#',
            prevText: 'Prev',
            nextText: 'Next',
            ellipseText: '...',
            prevShow: true,
            nextShow: true
        }, this.props)
        this.pageNum = Math.ceil(this.data.total / this.data.pageSize)

    }

    beforeUpdate() {
        this.pageNum = Math.ceil(this.data.total / this.data.pageSize)
    }

    beforeRender() {
        this.pageNum = Math.ceil(this.data.total / this.data.pageSize)
    }

    goto(index) {

        this.data.currentPage = index
        this.fire('change', { index })
        this.update()
    }

    render() {
        let arr = []
        var opt = this.data,
            interval = this.getInterval()

        if (interval[0] > 0 && opt.numEdge > 0) {
            var end = Math.min(opt.numEdge, interval[0])
            for (var i = 0; i < end; i++) {
                arr.push(this.getItem(i, i + 1))
            }

            if (opt.numEdge < interval[0] && opt.ellipseText) {
                arr.push(<li class="el-icon more btn-quicknext el-icon-more"></li>)
            }
        }

        for (var i = interval[0]; i < interval[1]; i++) {
            arr.push(this.getItem(i, i + 1))
        }

        if (interval[1] < this.pageNum && opt.numEdge > 0) {
            if (this.pageNum - opt.numEdge > interval[1] && opt.ellipseText) {
                arr.push(<li class="el-icon more btn-quicknext el-icon-more"></li>)
            }
            var begin = Math.max(this.pageNum - opt.numEdge, interval[1])
            for (var i = begin; i < this.pageNum; i++) {
                arr.push(this.getItem(i, i + 1))
            }
        }

        return <div class="el-pagination is-background">{opt.prevShow && this.getPrev()} <ul class="el-pager">{
            arr.map(function (p) {
                return p
            })
        } </ul> {opt.nextShow && this.getNext()}</div>
    }

    getInterval() {
        var ne_half = Math.ceil(this.data.numDisplay / 2)
        var upper_limit = this.pageNum - this.data.numDisplay
        var start = this.data.currentPage > ne_half ? Math.max(Math.min(this.data.currentPage - ne_half, upper_limit), 0) : 0
        var end = this.data.currentPage > ne_half ? Math.min(this.data.currentPage + ne_half, this.pageNum) : Math.min(this.data.numDisplay, this.pageNum)
        return [start, end]
    }

    getPrev() {
        if (this.data.currentPage === 0) {
            return <button type="button" class="btn-prev" disabled="disabled">
                <i class="el-icon el-icon-arrow-left"></i></button>
        }

        return <button type="button" class="btn-prev" onclick={e => { this.goto(this.data.currentPage - 1) }}>
            <i class="el-icon el-icon-arrow-left"></i></button>
    }

    getNext() {
        if (this.data.currentPage === this.pageNum - 1) {
            return <button type="button" class="btn-next" disabled="disabled">
                <i class="el-icon el-icon-arrow-right"></i>
            </button>
        }

        return <button type="button" class="btn-next" onclick={e => { this.goto(this.data.currentPage + 1) }}>
            <i class="el-icon el-icon-arrow-right"></i>
        </button>
    }

    getItem(pageIndex, text) {
        if (this.data.currentPage === pageIndex) {
            return <li class="number active">{text}</li>
        }
        return <li class="number" onclick={e => { this.goto(pageIndex) }}>{text}</li>
    }
}
