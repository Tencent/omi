import webpack from 'webpack'
import webpackConfig from '../webpack.config.js'
import fs from 'fs'

const compiler = webpack(webpackConfig)

compiler.run((err, stats) => {
    if (err) return reject(err)

    const jsonStats = stats.toJson()

    if (jsonStats.errors.length > 0) {
        const error = new Error(jsonStats.errors[0])
        error.errors = jsonStats.errors
        error.warnings = jsonStats.warnings
        return reject(error)
    }

    var contentText = fs.readFileSync('index.js', 'utf-8');

    if (!fs.existsSync('dist')) {
        fs.mkdirSync('dist')
    }
    fs.writeFileSync('dist/index.html', `<html><head></head><body><script>` + contentText + `</script></body></html>`, 'utf-8')

    fs.unlinkSync('index.js')
})