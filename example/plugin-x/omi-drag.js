
import Omi from '../../src/index.js'

class OmiDrag extends Omi.Component {
    constructor(data) {
        super(data)
    }

    installed(){
        console.log(this.node)
        console.log(this.data)

        this.node.addEventListener('click',this.data.click,false)
    }

    render() {
        return this.data.children[0];
    }

    style() {
        return `
        .test{
            width:100px;
            height:100px;
            color:white;
            line-height:90px;
            text-align:center;
            background-color:#00BFF3;
        }
        `
    }
}


export default  OmiDrag