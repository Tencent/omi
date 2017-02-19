import scopedEvent from '../../src/event.js';

describe("scopedEvent", function() {

    var result =   scopedEvent("<div onclick='adfd()'>sfsdf </div>",1);
    it("and so is a spec", function() {
        expect(result).toBe("<div onclick='Omi.instances[1].adfd()'>sfsdf </div>");
        expect( scopedEvent(result)).toBe("<div onclick='Omi.instances[1].adfd()'>sfsdf </div>");

    });
});

describe("scopedEvent2", function() {

    var result =   scopedEvent("<div onclick='adfd'>sfsdf </div>",1);
    it("and so is a spec", function() {
        expect(result).toBe("<div onclick='adfd'>sfsdf </div>");

    });
});