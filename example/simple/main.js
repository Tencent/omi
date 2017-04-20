import Omi from '../../src/index.js';

import hello from './hello.js'

Omi.tag('hello', hello)

class App extends Omi.Component {
    render(){
        return `<div>
                    afsdfsd
                    <hello data-name="Omi"></hello>
                </div>`
    }
}

Omi.render(new App(),"#container");