import Omi from '../../src/index.js';

class Content extends Omi.Component {
    constructor(data) {
        super(data);
    }
    goto (index) {
        this.data.index = index;
        this.update();
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
       <div class="content">i am page {{index}}</div>
       `;
    }
}

export default Content;