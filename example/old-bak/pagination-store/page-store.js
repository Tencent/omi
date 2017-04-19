import Omi from '../../src/index.js';

class PageStore extends Omi.Store {
    constructor(data, isReady) {
        super(isReady)

        this.data = Object.assign({
            total: 0,
            currentPage: 3,
            title: 'Pagination Example2'
        }, data)
    }

    goto(pageIndex) {
        if(pageIndex === this.data.currentPage) return

        this.data.currentPage = pageIndex
        this.update()
    }

    nextPage(){

        this.goto(this.data.currentPage+1)
    }

    prePage(){
        this.goto(this.data.currentPage-1)
    }

}

export default PageStore