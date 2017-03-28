import assert from 'assert';
import style from '../../src/style.js';

describe("scoper", function() {
    describe("Attribute selector as prefix", function() {
        var result = style.scoper(".active{ color:red};","[attribute]");
        it("expect attribute selector prefix works well", function() {
            expect(result).toBe(".active[attribute],[attribute] .active{ color:red};");
        });
    });

    describe("Id selector as prefix", function() {
        var result = style.scoper(".active{ color:red};","#id");
        it("expect id selector prefix works well", function() {
            expect(result).toBe(".active#id,#id .active{ color:red};");
        });
    });

    describe("Two classes", function() {
        var result = style.scoper(".active,.xx{ color:red};","#id");
        it("expect id selector prefix works well with two class selector", function() {
            expect(result).toBe(".active#id,#id .active,.xx#id,#id .xx{ color:red};");
        });
    });

    describe("Pseudo class", function() {
        var result = style.scoper(".active:hover{ color:red};","[attribute]");
        it("expect pseudo class works well", function() {
            expect(result).toBe(".active[attribute]:hover,[attribute] .active:hover{ color:red};");
        });
    });

    describe("Pseudo element", function() {
        var result = style.scoper(".active::after{ color:red};","[attribute]");
        it("expect pseudo element works well", function() {
            expect(result).toBe(".active[attribute]::after,[attribute] .active::after{ color:red};");
        });
    });

    describe("Quoted values", function() {
        var result = style.scoper(".active { font-family: \"Helvetica Neue\"};","[attribute]");
        it("expect quoted values works well", function() {
            expect(result).toBe(".active[attribute],[attribute] .active{ font-family: \"Helvetica Neue\"};");
        });
    });

    describe("Base64 values", function() {
        var result = style.scoper(".watch i, .watchaa  ,p:lang(it){background-image: url(data:image/png;base64,iVBORw0C);}.watch i, .watchaa  ,p:lang(it){background-image: url(data:image/png;base64,iVBORw0C);}",'#xx');
        it("expect quoted values works well", function() {
            expect(result).toBe(".watch i#xx,#xx .watch i, .watchaa#xx,#xx .watchaa,p#xx:lang(it),#xx p:lang(it){background-image: url(data:image/png;base64,iVBORw0C);}.watch i#xx,#xx .watch i, .watchaa#xx,#xx .watchaa,p#xx:lang(it),#xx p:lang(it){background-image: url(data:image/png;base64,iVBORw0C);}");
        });
    });

    describe("Media queries", function() {
        var rule = "@media (max-width: 600px) {\n" +
                    "  h1 {\n" +
                    "    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n" +
                    "  }" +
                    "}";
        var expected = "@media (max-width: 600px) {\n" +
                    "  h1#scoper-1,#scoper-1 h1{\n" +
                    "    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n" +
                    "  }" +
                    "}";
        var actual = style.scoper(rule, "#scoper-1");
        it("expect media queries works well", function() {
            expect(actual).toBe(expected);
        });
    });

    describe("Font faces", function() {
        var rule = "@font-face {\n" +
                "  font-family: 'MyWebFont';\n" +
                "  src: url('myfont.woff2') format('woff2');\n" +
                "       url('myfont.woff') format('woff');\n" +
                "}";
        var expected = rule;
        var actual = style.scoper(rule, "#scoper-1");
        it("expect font faces works well", function() {
            expect(actual).toBe(expected);
        });
    });

    describe("Comment", function() {
        var rule = "/* .item:nth-child(odd) {float: left;}*/";
        var expected = rule;
        var actual = style.scoper(rule, "#scoper-1");
        it("expect font faces works well", function() {
            expect(actual).toBe(expected);
        });
    });
});
