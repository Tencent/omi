//many thanks to https://github.com/thomaspark/scoper/
(function () {

    function init() {
        var style = document.createElement("style");
        style.appendChild(document.createTextNode(""));
        document.head.appendChild(style);
        //先隐藏所有dom元素
        style.sheet.insertRule("body { visibility: hidden; }", 0);
        style.sheet.insertRule("template { display: none !important; }", 0);
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

    //var newstyle;

    function process() {
        var styles = document.body.querySelectorAll("style[scoped]");

        if (styles.length === 0) {
            document.getElementsByTagName("body")[0].style.visibility = "visible";
            return;
        }

        var head = document.head || document.getElementsByTagName("head")[0];
        //newstyle && head.removeChild(newstyle);
       

        for (var i = 0; i < styles.length; i++) {
            var newstyle = document.createElement("style");
            var csses = "";
            var style = styles[i];
            var ncId = style.getAttribute('data-nuclearId');
            var css = style.innerHTML;
            newstyle.setAttribute('data-scoper-nuclearId', ncId);
            if (css && (style.parentElement.nodeName !== "BODY")) {
                var id = "nuclear-scoper-" + ncId;
                var prefix = "#" + id;

                //var wrapper = document.createElement("span");
                //wrapper.id = id;

                var parent = style.parentNode;
                var grandparent = parent.parentNode;

                parent.id = id;
                //grandparent.replaceChild(wrapper, parent);
                //wrapper.appendChild(parent);
                style.parentNode.removeChild(style);

                csses = csses + scoper(css, prefix);
            }
            if (newstyle.styleSheet) {
                newstyle.styleSheet.cssText = csses;
            } else {
                newstyle.appendChild(document.createTextNode(csses));
            }

            head.appendChild(newstyle);
        }

       
        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }



    if ("scoped" in document.createElement("style")) {
        Nuclear.refreshStyle= function(){};
        return;
    }

    init();

    if (document.readyState === "complete" || document.readyState === "loaded") {
        process();
    } else {
        document.addEventListener("DOMContentLoaded", process);
    }

    Nuclear.refreshStyle = function (ncId) {
        var style = document.querySelector('style[data-scoper-nuclearId="' + ncId + '"]');
        style&&style.parentNode.removeChild(style);
       // console.log(style)
        process();
    };
}());

