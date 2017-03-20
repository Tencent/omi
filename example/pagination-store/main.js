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

    render () {
        return `<div>
                    <h1>${this.$store.data.title}</h1>
                    <Content name="content" />
                    <Pagination
                        data-num-edge="1"
                        data-num-display="4"¡¡
                     />
                </div>`
    }
}

Omi.render( new Main(),'body',{
    store
})