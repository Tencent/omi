import Omi from '../../src/index.js';
import Pagination from './pagination.js';
import Content from './content.js';

Omi.tag('pagination', Pagination);
Omi.tag('content', Content);

class Main extends Omi.Component {
    constructor(data) {
        super(data);
    }

    handlePageChange(index){
        this.content.goto(index+1)
        this.update()
    }

    xxx(){

    }

    render () {
        return `<div>
                    <h1>Pagination Example</h1>
                    <content name="content" ></content>
                    <pagination
                        name="pagination"
                        :data-total="100"
                        :data-page-size="10"
                        :data-num-edge="1"
                        :data-num-display="4"
                        on-page-change="handlePageChange" ></pagination>
                </div>`;
    }
}

Omi.render( new Main(),'body');