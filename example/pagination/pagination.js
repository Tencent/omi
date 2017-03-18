import Omi from '../../src/index.js';

class Pagination extends Omi.Component {
    constructor(data) {
        data = Object.assign ({
            total: 0,
            pageSize: 10,
            numDisplay: 10,
            currentPage: 3,
            numEdge: 0,
            linkTo: "#",
            prevText: "Prev",
            nextText: "Next",
            ellipseText: "...",
            prevShow: true,
            nextShow: true,
            onPageChange: function () { return false; }
        }, data);
        super(data);

        this.useStore(Omi.store.paginationStore)
    }

    install () {
        this.pageNum = Math.ceil(this.data.total / this.data.pageSize);
    }

    goto (index,evt) {
        evt.preventDefault();
        this.store.goto(index);
        //this.data.currentPage=index;
        //this.update();
        //this.data.onPageChange(index);

    }
    style(){
        return `
    .pagination a {
            text-decoration: none;
            border: 1px solid #AAE;
            color: #15B;
    }

    .pagination a, .pagination span {
            display: inline-block;
            padding: 1px 6px;
            margin-right: 5px;
            margin-bottom: 5px;
            -moz-border-radius: 3px;
            -webkit-border-radius: 3px;
            border-radius: 3px;
        }

    .pagination .current {
            background: #26B;
            color: #fff;
            border: 1px solid #AAE;
        }

    .pagination .current.prev, .pagination .current.next {
            color: #999;
            border-color: #999;
            background: #fff;
    }
    `
    }
    render () {
        var tpl = '<div class="pagination">';
        var opt = this.data, interval = this.getInterval();
        //上一页
        if (opt.prevShow) {
            tpl += this.getPrev();
        }
        //起始点
        if (interval[0] > 0 && opt.numEdge > 0) {
            var end = Math.min(opt.numEdge, interval[0]);
            for (var i = 0; i < end; i++) {
                tpl += this.getItem(i, i + 1);
            }
            if (opt.numEdge < interval[0] && opt.ellipseText) {
                tpl += "<span>" + opt.ellipseText + "</span>";
            }
        }
        //内部的链接
        for (var i = interval[0]; i < interval[1]; i++) {
            tpl += this.getItem(i, i + 1);
        }
        // 结束点
        if (interval[1] < this.pageNum && opt.numEdge > 0) {
            if (this.pageNum - opt.numEdge > interval[1] && opt.ellipseText) {
                tpl += "<span>" + opt.ellipseText + "</span>";
            }
            var begin = Math.max(this.pageNum - opt.numEdge, interval[1]);
            for (var i = begin; i < this.pageNum ; i++) {
                tpl += this.getItem(i, i + 1);
            }
        }
        //下一页
        if (opt.nextShow) {
            tpl += this.getNext();
        }
        tpl += '</div>';
        return tpl;
    }
    getInterval () {
        var ne_half = Math.ceil(this.data.numDisplay / 2);
        var upper_limit = this.pageNum - this.data.numDisplay;
        var start = this.data.currentPage > ne_half ? Math.max(Math.min(this.data.currentPage - ne_half, upper_limit), 0) : 0;
        var end = this.data.currentPage > ne_half ? Math.min(this.data.currentPage + ne_half, this.pageNum) : Math.min(this.data.numDisplay, this.pageNum);
        return [start, end];
    }
    getPrev () {
        if (this.data.currentPage === 0) {
            return '<span nc-id="prev" class="current prev">{{prevText}}</span>';
        }
        return '<a nc-id="prev" onclick="goto('+(this.data.currentPage-1)+',event)" href="{{linkTo}}" class="prev">{{prevText}}</a>';
    }
    getNext () {
        if (this.data.currentPage === this.pageNum - 1) {
            return '<span nc-id="next" class="current next">{{nextText}}</span>';
        }
        return '<a nc-id="next" onclick="goto('+(this.data.currentPage+1)+',event)"  href="{{linkTo}}" class="next">{{nextText}}</a>';
    }
    getItem (pageIndex, text) {
        if (this.data.currentPage === pageIndex) {
            return '<span class="current">' + text + '</span>';
        }
        return '<a class="link" onclick="goto('+pageIndex+',event)"  data-pageIndex="' + pageIndex + '" href="{{linkTo}}">' + text + '</a>';
    }
}

export default Pagination;