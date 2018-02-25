import Omi from '../../src/index.js'
import Hello from './hello.js'

class App extends Omi.Component {
    handleClick(e) {
        console.log(this.refs.test)
        this.refs.test.innerHTML = 'empty!'
    }

    style() {
        return `
        <style>
        h3{
            color:red;
            cursor: pointer;
        }
        `
    }

    render() {
        return <div>
            <hello name={this.name}></hello>
            <h3 ref='test' onclick={this.handleClick.bind(this)}>scoped css and event test! click me!</h3>
        </div>
    }
}

Omi.render(new App(), 'body')
