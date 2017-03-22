import Omi from '../../src/index.js'
import Pagination from './pagination.js'
import Content from './content.js'
import store from './store.js'

Omi.makeHTML('Pagination', Pagination)
Omi.makeHTML('Content', Content)

class Main extends Omi.Component {
    constructor(data) {
        super(data)
    }

    handlePageChange(index){
        this.$store.goto(index)
    }

    render () {
        return `<div>
                    <h1>${this.$store.data.title}</h1>
                    <Content name="content" />
                    <Pagination
                        name="pagination"
                        :data-total="${this.$store.data.total}"
                        :data-current-page="${this.$store.data.currentPage}"
                        :data-page-size="10"
                        :data-num-edge="1"
                        :data-num-display="4"
                        onPageChange="handlePageChange"
                        preventSelfUpdate
                         />
                </div>`;
    }
}

Omi.render( new Main(),'body',{
    store
})