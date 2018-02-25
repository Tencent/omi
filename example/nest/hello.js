import Omi from '../../src/index.js'
import './sub_hello.js'

class Hello extends Omi.Component {
    is() {
        return 'hello'
    }

    render() {
        return <div> Hello Omi!
            <sub-hello></sub-hello>
        </div>
    }
}

Omi.tag('hello', Hello)

export default Hello
