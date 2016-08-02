//many thanks to https://github.com/thomaspark/scoper/
Nuclear.scoper = function (css, prefix) {
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

Nuclear.ie = (function () {

    var undef,
        v = 3,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i');

    while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
            all[0]
        );

    return v > 4 ? v : undef;

}());

Nuclear.addStyle = function (cssText, id) {
    var d = document,
        someThingStyles = d.createElement('style');
    d.getElementsByTagName('head')[0].appendChild(someThingStyles);
    someThingStyles.setAttribute('type', 'text/css');
    someThingStyles.setAttribute('id', id);
    if (Nuclear.ie) {
        someThingStyles.styleSheet.cssText = cssText;
    } else {

        someThingStyles.textContent = cssText;

    }

}