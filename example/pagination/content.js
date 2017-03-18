import Omi from '../../src/index.js';

class Content extends Omi.Component {
    constructor(data) {
        super(data);
        this.useStore(Omi.store.pageStore);
    }

    style(){
        return `
        .content{
            height: 80px;
            line-height: 53px;
            text-indent: 20px;
            font-size: 30px;
        }
        `
    }

    render () {
       return `
       <div class="content">i am page {{currentPage}}</div>
       `;
    }
}

export default Content;