import Omi from 'omi';
import Hello from '../../component/hello.js';

class App extends Omi.Component {
    style() {
        return ` div{color:red;}`
    }

    render() {
        return `
        <div>
            <Hello data-name="{{name}}" />
        </div>`;
    }
}


Omi.render(new App({name:'page-b'}),"body");