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

    var jsdom = require("jsdom").jsdom;
    var window = jsdom().defaultView;

    //window.__myObject = { foo: "bar" };

    var scriptEl = window.document.createElement("script");
    scriptEl.onload = function () {

        console.log(window.document.body.innerHTML)
        console.log(window.document.head.innerHTML)
        fs.unlinkSync('index.js')

        cpLite(window.document.head.innerHTML, window.document.body.innerHTML.replace('<script src="index.js"><\/script>',''))
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

        var contentText = fs.readFileSync('index.lite.js', 'utf-8');

        if (!fs.existsSync('dist')) {
            fs.mkdirSync('dist')
        }
        fs.writeFileSync('dist/index.html', `<html><head>`+css+`</head><body>`+html+`<script>` + contentText + `</script>`+ fs.readFileSync('./src/loadjs.js', 'utf-8')+`</body></html>`, 'utf-8')
        fs.unlinkSync('index.lite.js')
    })
}