import Omi from '../../src/index.js';
import Pagination from './pagination.js';
import Content from './content.js';

Omi.makeHTML('Pagination', Pagination);
Omi.makeHTML('Content', Content);

class Main extends Omi.Component {
    constructor(data) {
        super(data);
    }


    handlePageChange(index){
        this.content.goto(index+1)
        this.update()
    }

    render () {
        return `<div>
                    <h1>Pagination Example</h1>
                    <Content name="content" />
                    <Pagination
                        name="pagination"
                        :data-total="100"
                        :data-page-size="10"
                        :data-num-edge="1"
                        :data-num-display="4"　　　　　
                        onPageChange="handlePageChange" />
                </div>`;
    }
}

Omi.render( new Main(),'body');