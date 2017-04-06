import Omi from '../../src/index.js';

class Hello extends Omi.Component {

    render() {
        return  `<div><Test><div style="color:red;">abc</div></Test></div>`;

    }
}


class Test extends Omi.Component {

    render() {
        return  `<div>
                    <slot></slot>
                    efg
                </div>`;

    }
}
Omi.tag('Test',Test)
var hello = Omi.render(new Hello(),'body');

describe("A suite is just a function", function() {


    var result = hello.node.outerHTML
    console.log(result)
    it("hello omi", function() {
        expect(result).toBe(`<div omi_scoped_1=""><div omi_scoped_2="" omi_scoped_test="">
                    <div omi_scoped_1="" style="color:red;">abc</div>
                    efg
                </div></div>`);
    });
});

