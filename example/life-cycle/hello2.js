import Omi from '../../src/index.js'

class Hello extends Omi.Component {
    style() {
        return `div{
            cursor: pointer;
        }`
    }
    install() {
        console.log(111)
    }
    installed() {
        console.log(222)
    }
    clickHandler(evt) {
        alert(evt.target.innerHTML)
    }
    beforeUpdate() {
        console.log('beforeUpdate' + 111)
    }

    beforeRender() {
        console.log('beforeRender' + 222)
    }
    afterUpdate() {
        console.log('afterUpdate' + 333)
    }
    render() {
        return <div onclick={this.clickHandler.bind(this)}>Hello, {this.data.name}</div>
    }
}

export default Hello
