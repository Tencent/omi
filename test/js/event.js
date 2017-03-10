import scopedEvent from '../../src/event.js';

describe("scopedEvent", function() {
    var result2 =   scopedEvent("<div onclick='adfd()' onblur='adfd()'>sfsdf </div>",1);
    var result3 =   scopedEvent("<div onblur='adfd'>sfsdf </div>",1);
    var result =   scopedEvent("<div onclick='adfd()'>sfsdf </div>",1);
    it("and so is a spec", function() {
        expect(result).toBe("<div onclick='Omi.instances[1].adfd()'>sfsdf </div>");
        expect( scopedEvent(result)).toBe("<div onclick='Omi.instances[1].adfd()'>sfsdf </div>");
        expect(result2).toBe("<div onclick='Omi.instances[1].adfd()' onblur='Omi.instances[1].adfd()'>sfsdf </div>");
        expect(result3).toBe("<div onblur='adfd'>sfsdf </div>");
    });
});

describe("scopedEvent2", function() {

    var result =   scopedEvent("<div onclick='adfd'>sfsdf </div>",1);
    it("and so is a spec", function() {
        expect(result).toBe("<div onclick='adfd'>sfsdf </div>");

    });
});

//describe("jsx-like event binding", function() {
//
//    var result =   scopedEvent("<div onclick={function(e){console.log(this)}}>sfsdf </div>",1);
//    it("and so is a spec", function() {
//        expect(result).toBe(`<div onclick="new Function('event', '(function(e){console.log(this)}).bind(Omi.instances[1])(event)')(event)";>sfsdf </div>`);
//    });
//});
//
//describe("jsx-like event binding with quote", function() {
//
//    var result =   scopedEvent('<div onclick={function(e){console.log("string with sigal quote \' and double quote \"")}}>sfsdf </div>',1);
//    it("and so is a spec", function() {
//        expect(result).toBe(`<div onclick="new Function('event', '(function(e){console.log(&quot;string with sigal quote \\&#039; and double quote &quot;&quot;)}).bind(Omi.instances[1])(event)')(event)";>sfsdf </div>`);
//    });
//});
