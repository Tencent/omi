import Omi from '../../src/index.js'

import Hello from './hello.js'

class App extends Omi.Component {
    render() {
        return <div>
                    afsdfsd
            <Hello name="Omi"></Hello>
        </div>
    }
    install() {
        console.log(1)
    }
    installed() {
        console.log(2)
    }
    beforeUpdate() {
        console.log('beforeUpdate' + 1)
    }

    beforeRender() {
        console.log('beforeRender' + 2)
    }
    afterUpdate() {
        console.log('afterUpdate' + 3)
    }
}

Omi.render(new App(), '#container')
