import Omi from './omi.js'

//many thanks to https://github.com/thomaspark/scoper/
function scoper(css, prefix) {
    let re = new RegExp("([^\r\n,{}:]+)(:[^\r\n,{}]+)?(,(?=[^{]*{)|\s*{)", "g")
    /**
     * Example:
     *
     * .classname::pesudo { color:red }
     *
     * g1 is normal selector `.classname`
     * g2 is pesudo class or pesudo element
     * g3 is the suffix
     */
    css = css.replace(re, function(g0, g1, g2, g3) {
        if (typeof g2 === "undefined") {
            g2 = ""
        }

        if (g0.indexOf(';base64') > 0) {
            return g0;
        }

        if (g1.match(/^\s*(@media|@keyframes|to|from|@font-face)/)) {
            return g1 + g2 + g3
        }

        var appendClass = g1.replace(/(\s*)$/, "") + prefix + g2
        var prependClass = prefix + " " + g1.trim() + g2
        return appendClass + "," + prependClass + g3
    })

    return css
}

function addStyle(cssText, id) {
    let ele = document.getElementById(Omi.STYLEPREFIX  + id),
        head = document.getElementsByTagName('head')[0]
    if (ele && ele.parentNode === head) {
        head.removeChild(ele)
    }

    let someThingStyles = document.createElement('style')
    head.appendChild(someThingStyles)
    someThingStyles.setAttribute('type', 'text/css')
    someThingStyles.setAttribute('id',Omi.STYLEPREFIX + id)
    if (!!window.ActiveXObject) {
        someThingStyles.styleSheet.cssText = cssText
    } else {
        someThingStyles.textContent = cssText
    }
}

export default {
    scoper:scoper,
    addStyle:addStyle
}