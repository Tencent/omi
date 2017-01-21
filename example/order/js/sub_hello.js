import Omi from '../../../src/index.js';
import SubSubHello from './sub_sub_hello.js';

class SubHello extends Omi.Component {
    constructor(data) {
        super(data);
    }
    style(){
       return`
        a{
            color: #4078c0;
            text-decoration: none;
        }
        `;
    }
    render() {
        return `
            <div>
                <a   href="https://github.com/AlloyTeam/AlloyTouch/wiki/Scoped-CSS">link</a>
                i am SubHello's instance2{{name}}!
                <SubSubHello data-name="ssh11111111" />
                <SubSubHello data-name="ssh22222222" />
            </div>
         `;
    }
}
Omi.makeHTML(SubHello);

export default SubHello;