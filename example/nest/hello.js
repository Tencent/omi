import Omi from '../../src/index.js'
import SH from './sub_hello.js'

class Hello extends Omi.Component {
    is() {
        return 'hello'
    }

    render() {
        return <div> Hello Omi!
            <SH />
        </div>
    }
}


export default Hello
