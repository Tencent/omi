import webpack from 'webpack'
import webpackConfig from '../webpack.config.js'
import fs from 'fs'

const compiler = webpack(webpackConfig)

compiler.run((err, stats) => {
    if (err) {
        console.error(err)
        return
    }

    const jsonStats = stats.toJson()

    if (jsonStats.errors.length > 0) {
        const error = new Error(jsonStats.errors[0])
        error.errors = jsonStats.errors
        error.warnings = jsonStats.warnings
        console.error(err)
        return
    }

    const jsdom = require("jsdom").jsdom;
    const window = jsdom().defaultView;

    //window.__myObject = { foo: "bar" };

    let scriptEl = window.document.createElement("script");
    scriptEl.onload = function () {

        fs.unlinkSync('index.js')
        cpLite(window.document.head.innerHTML, '<div id="__omi">'+window.document.body.innerHTML.replace('<script src="index.js"><\/script>','')+'</div>')


    }
    scriptEl.src = "index.js"
    window.document.body.appendChild(scriptEl)
})

function cpLite(css, html) {
    webpackConfig.externals.omi = 'Omi'
    webpackConfig.output.filename = 'index.lite.js'
    const compilerEncludeOmi = webpack(webpackConfig)

    compilerEncludeOmi.run((err, stats) => {
        if (err) {
            console.error(err)
            return
        }

        const jsonStats = stats.toJson()

        if (jsonStats.errors.length > 0) {
            const error = new Error(jsonStats.errors[0])
            error.errors = jsonStats.errors
            error.warnings = jsonStats.warnings
            console.error(err)
            return
        }

        const content = fs.readFileSync('index.lite.js', 'utf-8')
        let newContent = JSON.stringify({ component: content })
        newContent = newContent.replace(/(\.render\([\s\S]*?\\['|"])(body)(\\['|"]\))/,()=>{
            return RegExp.$1 + '#__omi'  +RegExp.$3;
        })
        if (!fs.existsSync('dist')) {
            fs.mkdirSync('dist')
        }
        let script = fs.readFileSync('./src/loadjs.js', 'utf-8');

        fs.writeFileSync('dist/index.html', `<html><head>`+css+`</head><body>`+html+`<script>var __OMI_DATA__=` + newContent + `</script><script>`+script+`</script></body></html>`, 'utf-8')
        fs.unlinkSync('index.lite.js')
    })
}