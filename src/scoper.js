//many thanks to https://github.com/thomaspark/scoper/
(function () {

    function init() {
        //var style = document.createElement("style");
        //style.appendChild(document.createTextNode(""));
        //document.head.appendChild(style);
        ////先隐藏所有dom元素
        //style.sheet.insertRule("body { visibility: hidden; }", 0);
        //style.sheet.insertRule("template { display: none !important; }", 0);
    }

    function scoper(css, prefix) {
        var re = new RegExp("([^\r\n,{}]+)(,(?=[^}]*{)|\s*{)", "g");
        css = css.replace(re, function (g0, g1, g2) {

            if (g1.match(/^\s*(@media|@keyframes|to|from|@font-face)/)) {
                return g1 + g2;
            }

            if (g1.match(/:scope/)) {
                g1 = g1.replace(/([^\s]*):scope/, function (h0, h1) {
                    if (h1 === "") {
                        return "> *";
                    } else {
                        return "> " + h1;
                    }
                });
            }

            g1 = g1.replace(/^(\s*)/, "$1" + prefix + " ");

            return g1 + g2;
        });

        return css;
    }

    function process() {
        //document.getElementsByTagName("body")[0].style.visibility = "visible";
    }

    Nuclear.scoper = scoper;
    if ("scoped" in document.createElement("style")) {
        return;
    }

    //init();
    //
    //if (document.readyState === "complete" || document.readyState === "loaded") {
    //    process();
    //} else {
    //    document.addEventListener("DOMContentLoaded", process);
    //}
}());

