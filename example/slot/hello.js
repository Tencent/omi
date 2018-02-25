import Omi from '../../src/index.js'

class Hello extends Omi.Component {
    render() {
        return <div>I am Hello Component!  from parent:{this.data.name}</div>
    }
}

export default Hello
