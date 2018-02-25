import Omi from '../../src/index.js'

import './hello.js'

class App extends Omi.Component {
    render() {
        return <div>
                    afsdfsd
            <hello name="Omi"></hello>
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
