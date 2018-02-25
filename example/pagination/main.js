import Omi from '../../src/index.js'
import Pagination from './pagination.js'
import Content from './content.js'

class Main extends Omi.Component {
    constructor(data) {
        super(data)
    }

    handlePageChange(index) {
        this.content.goto(index + 1)
        // or get it by omi-id
        // Omi.get('content').goto(index+1)
        this.update()
    }

    render() {
        return (
            <div>
                <h1>Pagination Example</h1>
                <Content omi-name="content" omi-id="content"></Content>
                <Pagination
                    name="pagination"
                    total={100}
                    pageSize={10}
                    numEdge={1}
                    numDisplay={4}
                    onPageChange={this.handlePageChange.bind(this)} ></Pagination>
            </div>)
    }
}

Omi.render(new Main(), 'body')
