import Omi from './omi.js'

//many thanks to https://github.com/thomaspark/scoper/
function scoper(css, prefix) {
    let re = new RegExp("([^\r\n,{}]+)(,(?=[^}]*{)|\s*{)", "g")
    css = css.replace(re, function(g0, g1, g2) {

        if (g1.match(/^\s*(@media|@keyframes|to|from|@font-face)/)) {
            return g1 + g2
        }

        if (g1.match(/:scope/)) {
            g1 = g1.replace(/([^\s]*):scope/, function (h0, h1) {
                if (h1 === "") {
                    return "> *"
                } else {
                    return "> " + h1
                }
            })
        }

        g1 = g1.replace(/^(\s*)/, g1.trim() + prefix + "," + "$1"  + prefix + " ").replace(/\s+/g, ' ')
        return g1 + g2
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