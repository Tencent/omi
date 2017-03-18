import PageStore from './page-store.js';
import PaginationStore from './pagination-store.js';

let currentPage = 3
let pageStore = new PageStore({
    currentPage:currentPage+1
})

setTimeout(function(){

    //pageStore.data.currentPage = 0;
    //
    //pageStore.beReady();
},3000)

let paginationStore = new PaginationStore({
    total:100,
    currentPage:currentPage,
    onPageChange:(pageIndex)=>{
        pageStore.updatePageIndex(pageIndex)
    }
})



export default {
    pageStore: pageStore,
    paginationStore: paginationStore
}