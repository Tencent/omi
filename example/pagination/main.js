import Omi from '../../src/index.js';
import Pagination from './pagination.js';
import Content from './content.js';
import store from './store.js';

Omi.makeHTML('Pagination', Pagination);
Omi.makeHTML('Content', Content);

Omi.useStore(store);

class Main extends Omi.Component {
    constructor(data) {
        super(data);
        this.useStore(Omi.store.pageStore);
    }

    installed(){
    }


    render () {
        return `<div>
                    <h1>{{title}}</h1>
                    <Content name="content" />
                    <Pagination />
                </div>`;
    }
}

Omi.render( new Main(),'body');