import Omi from '../../src/index.js'

class Hello extends Omi.Component {
    render() {
        return (
            <div> Hello
                <h1 style="display:inline-block;">{this.data.name}</h1>!
            </div>
            )
    }
}

Omi.tag('hello', Hello)

export default Hello
