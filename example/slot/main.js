import Omi from '../../src/index.js'
import Noteslist from './nodes-list.js'
import Hello from './hello.js'

class App extends Omi.Component {
    install(){
        this.name = 'abcd'
    }

    render() {
        return <Noteslist a="a" class="sfds">
            <span>hello</span>
            <span>world!</span>
            <Hello name={this.name}></Hello>
        </Noteslist>
    }
}

Omi.render(new App(), 'body')
