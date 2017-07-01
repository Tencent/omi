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
    install(){
        console.log(1)
    }
    installed(){
        console.log(2)
    }
}

Omi.render(new App(),"#container");