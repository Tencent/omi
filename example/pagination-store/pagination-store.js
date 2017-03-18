import Omi from '../../src/index.js';

class PaginationStore extends Omi.Store {
    constructor(data, isReady) {
        super(isReady)

        this.data = Object.assign(
            {
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
                onPageChange: function(){}

            }, data)

    }

    goto(pageIndex) {
        if(pageIndex === this.data.currentPage)return
        this.data.onPageChange(pageIndex)
        this.data.currentPage = pageIndex
        this.update()
    }

    nextPage(){
        this.currentPage++
        this.goto(this.currentPage)
    }
}

export default PaginationStore