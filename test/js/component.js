import Omi from '../../src/index.js';

class Hello extends Omi.Component {
    constructor(data, renderTo) {
        super(data, renderTo);

    }
    style () {
        return  `
               h1{
            color:red;
        }
         `;
    }
    onClick(){
        alert(1);
    }
    render() {
        return  `<h1 onclick="onClick(1)">Omi by {{name}}</h1>`;

    }
}

var hello = Omi.render(new Hello({ name:'dntzhang'}),'body');

describe("A suite is just a function", function() {


    var result = hello.node.outerHTML
    it("hello omi", function() {
        expect(result).toBe('<h1 omi_scoped_0="" onclick="Omi.instances[0].onClick(1)">Omi by dntzhang</h1>');
    });
});

describe("Omi.mixIndex ", function() {

    var items = [1,2]
    Omi.mixIndex(items);
    it("Omi.mixIndex", function() {
        expect(JSON.stringify(items)).toBe('[{"value":1,"index":0},{"value":2,"index":1}]');
    });

    var items2 = [{a:1},{b:2}];
    Omi.mixIndex(items2);
    it("Omi.mixIndex", function() {
        expect(JSON.stringify(items2)).toBe('[{"a":1,"index":0},{"b":2,"index":1}]');
    });

    var items3 = [{a:1},{b:2}];
    Omi.mixIndex(items3,"myIndex");
    it("Omi.mixIndex", function() {
        expect(JSON.stringify(items3)).toBe('[{"a":1,"myIndex":0},{"b":2,"myIndex":1}]');
    });
});






describe("_getDataset ", function() {
    hello._dataset = {};
    hello._getDataset('<div data-a="a" data-b="b"></div>');

    it("_getDataset", function() {
        expect(hello._dataset.a).toBe('a');
    });
});