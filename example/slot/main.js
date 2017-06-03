import Omi from '../../src/index.js';

import hello from './hello.js'

Omi.tag('hello', hello)

class App extends Omi.Component {
    render(){
        return `<div>
                    <hello data-name="Omi">
                        <h1 slot-index="0">slot 1</h1>
                        <h1 slot-index="1">slot 2</h1>
                    </hello>
                </div>`
    }
}

Omi.render(new App(),"#container");