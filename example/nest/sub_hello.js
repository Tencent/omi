import Omi from '../../src/index.js'

class Hello extends Omi.Component {
    is() {
        return 'hello'
    }

    render() {
        return <div> Sub-Hello Omi! </div>
    }
}

Omi.tag('sub-hello', Hello)

export default Hello
