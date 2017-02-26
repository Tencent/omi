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
    beforeUpdate(){
        console.log("sh_b")
    }

    afterUpdate(){
        console.log("sh_a")
    }
    installed(){
        console.log(2);
    }
    render() {
        return `
            <div>
                <a   href="https://github.com/AlloyTeam/AlloyTouch/wiki/Scoped-CSS">link</a>
                i am SubHello's instance2{{name}}!
                <SubSubHello  />
            </div>
         `;
    }
}
Omi.makeHTML('SubHello', SubHello);

export default SubHello;