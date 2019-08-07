
const ConcatSource = require('webpack-sources').ConcatSource
const ModuleFilenameHelpers = require('webpack/lib/ModuleFilenameHelpers')

const PluginName = 'MpPlugin'

process.env.isMiniprogram = true // 设置环境变量
const globalVars = ['navigator', 'HTMLElement', 'localStorage', 'sessionStorage', 'location']

/**
 * 给 chunk 头尾追加内容
 */
function wrapChunks(compilation, chunks) {
    chunks.forEach(chunk => {
        chunk.files.forEach(fileName => {
            if (ModuleFilenameHelpers.matchObject({test: /\.js$/}, fileName)) {
                const headerContent = 'module.exports = function(window, document) {' + globalVars.map(item => `var ${item} = window.${item}`).join(';') + ';'
                const footerContent = '}'

                compilation.assets[fileName] = new ConcatSource(headerContent, compilation.assets[fileName], footerContent)
            }
        })
    })
}

class MpPlugin {
    constructor(options) {
        this.options = options
    }

    apply(compiler) {
   
        // 处理头尾追加内容
        compiler.hooks.compilation.tap(PluginName, compilation => {
            if (this.afterOptimizations) {
                compilation.hooks.afterOptimizeChunkAssets.tap(PluginName, chunks => {
                    wrapChunks(compilation, chunks)
                })
            } else {
                compilation.hooks.optimizeChunkAssets.tapAsync(PluginName, (chunks, callback) => {
                    wrapChunks(compilation, chunks)
                    callback()
                })
            }
        })
    }
}

module.exports = MpPlugin
