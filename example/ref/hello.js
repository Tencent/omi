import Omi from '../../src/index.js'

class Hello extends Omi.Component {
    handleClick() {
        alert(this.refs.bb.innerHTML)
    }

    render() {
        return <div ref='aa' onclick={this.handleClick.bind(this)}>
            Hello {this.data.name}!
            <div ref='bb'>c</div>
        </div>
    }
}

Omi.tag('hello', Hello)

export default Hello
