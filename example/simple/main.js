import Omi from '../../src/index.js';

import hello from './hello.js'

Omi.tag('hello', hello)

class App extends Omi.Component {
    render(){
        return `<hello data-name="Omi"></hello>`
    }
}

Omi.render(new App(),"#container");