import Omi from '../../src/index.js'
import Hello from './hello.js'

class App extends Omi.Component {
    install() {
        this.name = 'Omi'
    }

    handleClick(e) {
        this.name = 'Omix'
        this.update()
    }

    style() {
        return `h3{
                    color:red;
                    cursor: pointer;
                }`
    }

    render() {
        return <div>
                    <Hello name={this.name}></Hello>
                    <h3 onclick={this.handleClick.bind(this)}>Scoped css and event test! you can't click me from renderToString!</h3>
                </div>
    }
}

document.body.innerHTML = Omi.renderToString( <App />)
