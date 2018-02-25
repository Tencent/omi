import Omi from '../../src/index.js'
const $ = Omi.tags
class Hello extends Omi.Component {
    render() {
        return $.div( 'Hello2 ' + this.data.name+'!')
    }
}

Omi.tag('Hello', Hello)

export default Hello
