import style from '../../src/style.js';

describe("scoper", function() {

   var result =  style.scoper(".active{ color:red};","[ab12]")
    it("and so is a spec", function() {
        expect(result).toBe(".active[ab12],[ab12] .active{ color:red};");
    });
});

describe("scoper-ml", function() {

    var result =  style.scoper(".active{ " +
        "color:red" +
        "};","#test")
    it("and so is a spec", function() {
        expect(result).toBe(".active#test,#test .active{ " +
            "color:red" +
            "};");
    });
});

describe("scoper3", function() {

    var result =  style.scoper(".active,.xx{ color:red};","#ab12")
    it("and so is a spec", function() {
        expect(result).toBe(".active#ab12,#ab12 .active,.xx#ab12,#ab12 .xx{ color:red};");
    });
});
