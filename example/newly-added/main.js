import Omi from '../../src/index.js'

import HelloList from './hello-list.js'
class App extends Omi.Component {
    install() {
        this.name = 'Omi'
        this.items= ["asfs",2,3,4]
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
                  <HelloList />



                </div>
    }
}

Omi.render(new App(), 'body')
