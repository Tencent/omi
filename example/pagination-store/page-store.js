import Omi from '../../src/index.js';

class PageStore extends Omi.Store {
    constructor(data, isReady) {
        super(isReady)

        this.data = Object.assign({currentPage: 0, title: 'Pagination Example2'}, data)

    }


    updateTitle(title){
        this.data.title = title
        this.update()
    }

    updatePageIndex(index){
        this.data.currentPage = index+1
        this.update()
    }
}

export default PageStore