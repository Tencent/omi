import Omi from '../../src/index.js'

class Content extends Omi.Component {
    constructor(data) {
        super(data)
        this.data.index = 1
    }

    goto(index) {
        this.data.index = index
    }

    style() {
        return `
        .content{
            height: 80px;
            line-height: 53px;
            text-indent: 20px;
            font-size: 30px;
        }
        `
    }
    render() {
        return <div class="content">i am page {this.data.index}</div>
    }
}

export default Content
