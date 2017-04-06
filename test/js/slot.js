import Omi from '../../src/index.js';

class Hello extends Omi.Component {

    render() {
        return  `<div><Test><div style="color:red;">abc</div></Test></div>`;

    }
}


class Test extends Omi.Component {

    render() {
        return  `<div><slot></slot>efg</div>`;

    }
}
Omi.tag('Test',Test)
var hello = Omi.render(new Hello(),'body');

describe("slot1", function() {


    var result = hello.node.outerHTML

    it("hello omi", function() {
        expect(result).toBe(`<div omi_scoped_1=""><div omi_scoped_2="" omi_scoped_test=""><div omi_scoped_2="" omi_scoped_test="" omi_scoped_1="" style="color:red;">abc</div>efg</div></div>`);
    });
});


class Hello2 extends Omi.Component {

    render() {
        return  `<div>
                    <Test2>
                        <div slot-index="1" style="color:red;">abc</div>
                        <div slot-index="0" style="color:green;">efg</div>
                    </Test2>
                </div>`;

    }
}


class Test2 extends Omi.Component {

    render() {
        return  `<div>
                    <slot></slot>
                    <slot></slot>
                </div>`;

    }
}
Omi.tag('Test2',Test2)




describe("slot2", function() {


    var hello2 = Omi.render(new Hello2(),'body');

    var result2 = hello2.node.outerHTML

    it("hello omi", function() {
        expect(result2).toBe(`<div omi_scoped_3="">
                    <div omi_scoped_4="" omi_scoped_test2="">
                    <div omi_scoped_4="" omi_scoped_test2="" omi_scoped_3="" slot-index="0" style="color:green;">efg</div>
                    <div omi_scoped_4="" omi_scoped_test2="" omi_scoped_3="" slot-index="1" style="color:red;">abc</div>
                </div>
                </div>`);
    });
});
