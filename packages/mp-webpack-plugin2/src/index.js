const path = require('path')
const fs = require('fs')
const ConcatSource = require('webpack-sources').ConcatSource
const ModuleFilenameHelpers = require('webpack/lib/ModuleFilenameHelpers')
const {RawSource} = require('webpack-sources')
const pathToRegexp = require('path-to-regexp')
const adjustCss = require('./tool/adjust-css')
const _ = require('./tool/utils')

const PluginName = 'MpPlugin'
const pageJsTmpl = fs.readFileSync(path.resolve(__dirname, './tmpl/page.tmpl.js'), 'utf8')
const appWxssTmpl = fs.readFileSync(path.resolve(__dirname, './tmpl/app.tmpl.wxss'), 'utf8')
const projectConfigJsonTmpl = require('./tmpl/project.config.tmpl.json')
const packageConfigJsonTmpl = require('./tmpl/package.tmpl.json')

process.env.isMiniprogram = true // 设置环境变量
const globalVars = ['navigator', 'HTMLElement', 'localStorage', 'sessionStorage', 'location']

/**
 * 添加文件
 */
function addFile(compilation, filename, content) {
    compilation.assets[filename] = {
        source: () => content,
        size: () => Buffer.from(content).length,
    }
}

/**
 * 给 chunk 头尾追加内容
 */
function wrapChunks(compilation, chunks) {
    chunks.forEach(chunk => {
        chunk.files.forEach(fileName => {
            if (ModuleFilenameHelpers.matchObject({test: /\.js$/}, fileName)) {
                const headerContent = 'module.exports = function(window, document) {' + globalVars.map(item => `var ${item} = window.${item}`).join(';') + ';window.HTMLIFrameElement = function(){};' 
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
        const options = this.options

        // 补充其他文件输出
        compiler.hooks.emit.tapAsync(PluginName, (compilation, callback) => {
            const entryNames = Array.from(compilation.entrypoints.keys())

            // 合并页面配置
            const globalConfig = options.global || {}
            const pageConfigMap = options.pages || {}
            entryNames.forEach(entryName => {
                pageConfigMap[entryName] = Object.assign({}, globalConfig, pageConfigMap[entryName] || {})
            })

            for (const entryName of entryNames) {
                const assets = {
                    js: [],
                    css: [],
                }

                const filePathMap = {}
                const extRegex = /\.(css|js|wxss)(\?|$)/
                const entryFiles = compilation.entrypoints.get(entryName).getFiles()

                entryFiles.forEach(filePath => {
                    // 跳过非 css 和 js
                    const extMatch = extRegex.exec(filePath)
                    if (!extMatch) return

                    // 跳过已记录的
                    if (filePathMap[filePath]) return
                    filePathMap[filePath] = true

                    // 记录
                    let ext = extMatch[1]
                    ext = ext === 'wxss' ? 'css' : ext
                    assets[ext].push(filePath)

                    // 调整 css 内容
                    if (ext === 'css') {
                        compilation.assets[filePath] = new RawSource(adjustCss(compilation.assets[filePath].source()))
                    }
                })

                const addPageScroll = pageConfigMap[entryName] && pageConfigMap[entryName].windowScroll
                const pageBackgroundColor = pageConfigMap[entryName] && pageConfigMap[entryName].backgroundColor
                const reachBottom = pageConfigMap[entryName] && pageConfigMap[entryName].reachBottom
                const reachBottomDistance = pageConfigMap[entryName] && pageConfigMap[entryName].reachBottomDistance
                const pullDownRefresh = pageConfigMap[entryName] && pageConfigMap[entryName].pullDownRefresh

                // 页面 js
                let pageJsContent = pageJsTmpl.replace('/* INIT_FUNCTION */', `function init(window, document) {${assets.js.map(js => 'require(\'../../common/' + js + '\')(window, document)').join(';')}}`)
                let pageScrollFunction = ''
                let reachBottomFunction = ''
                let pullDownRefreshFunction = ''
                if (addPageScroll) {
                    pageScrollFunction = () => 'onPageScroll({ scrollTop }) {if (this.window) {this.window.document.documentElement.scrollTop = scrollTop || 0;this.window.$$trigger(\'scroll\');}},'
                }
                if (reachBottom) {
                    reachBottomFunction = () => 'onReachBottom() {if (this.window) {this.window.$$trigger(\'reachbottom\');}},'
                }
                if (pullDownRefresh) {
                    pullDownRefreshFunction = () => 'onPullDownRefresh() {if (this.window) {this.window.$$trigger(\'pulldownrefresh\');}},'
                }
                pageJsContent = pageJsContent.replace('/* PAGE_SCROLL_FUNCTION */', pageScrollFunction)
                pageJsContent = pageJsContent.replace('/* REACH_BOTTOM_FUNCTION */', reachBottomFunction)
                pageJsContent = pageJsContent.replace('/* PULL_DOWN_REFRESH_FUNCTION */', pullDownRefreshFunction)
                addFile(compilation, `../pages/${entryName}/index.js`, pageJsContent)

                // 页面 wxml
                const pageWxmlContent = '<element wx:if="{{pageId}}" class="{{bodyClass}}" style="{{bodyStyle}}" data-private-node-id="e-body" data-private-page-id="{{pageId}}"></element>'
                addFile(compilation, `../pages/${entryName}/index.wxml`, pageWxmlContent)

                // 页面 wxss
                let pageWxssContent = assets.css.map(css => `@import "../../common/${css}";`).join('\n')
                if (pageBackgroundColor) pageWxssContent = `page { background-color: ${pageBackgroundColor}; }\n` + pageWxssContent
                addFile(compilation, `../pages/${entryName}/index.wxss`, adjustCss(pageWxssContent))

                // 页面 json
                const pageJson = {
                    usingComponents: {
                        element: 'miniprogram-element'
                    }
                }
                if (reachBottom && typeof reachBottomDistance === 'number') {
                    pageJson.onReachBottomDistance = reachBottomDistance
                }
                if (pullDownRefresh) {
                    pageJson.enablePullDownRefresh = pullDownRefresh
                }
                const pageJsonContent = JSON.stringify(pageJson, null, '\t')
                addFile(compilation, `../pages/${entryName}/index.json`, pageJsonContent)
            }

            const pages = entryNames.map(entryName => `pages/${entryName}/index`)

            // 追加 webview 页面
            if (options.redirect && (options.redirect.notFound === 'webview' || options.redirect.accessDenied === 'webview')) {
                addFile(compilation, '../pages/webview/index.js', 'Page({data:{url:\'\'},onLoad: function(query){this.setData({url:decodeURIComponent(query.url)})}})')
                addFile(compilation, '../pages/webview/index.wxml', '<web-view src="{{url}}"></web-view>')
                addFile(compilation, '../pages/webview/index.wxss', '')
                addFile(compilation, '../pages/webview/index.json', '{"usingComponents":{}}')
                pages.push('pages/webview/index')
            }

            // app js
            const appJsContent = 'App({})'
            addFile(compilation, '../app.js', appJsContent)

            // app wxss
            const appWxssContent = appWxssTmpl
            addFile(compilation, '../app.wxss', adjustCss(appWxssContent))

            // app json
            const userAppJson = options.appExtraConfig || {}
            const appJsonContent = JSON.stringify({
                pages,
                window: options.app || {},
                ...userAppJson,
            }, null, '\t')
            addFile(compilation, '../app.json', appJsonContent)

            // config js
            const router = {}
            if (options.router) {
                // 处理 router
                Object.keys(options.router).forEach(key => {
                    const pathObjList = []
                    let pathList = options.router[key]
                    pathList = Array.isArray(pathList) ? pathList : [pathList]

                    for (const pathItem of pathList) {
                        // 将每个 route 转成正则并进行序列化
                        if (!pathItem || typeof pathItem !== 'string') continue

                        const keys = []
                        const regexp = pathToRegexp(pathItem, keys)
                        const pattern = regexp.valueOf()

                        pathObjList.push({
                            regexp: pattern.source,
                            options: `${pattern.global ? 'g' : ''}${pattern.ignoreCase ? 'i' : ''}${pattern.multiline ? 'm' : ''}`,
                        })
                    }
                    router[key] = pathObjList
                })
            }
            const configJsContent = 'module.exports = ' + JSON.stringify({
                origin: options.origin || 'https://miniprogram.default',
                entry: options.entry || '/',
                router,
                pages: pageConfigMap,
                redirect: options.redirect || {},
                optimization: options.optimization || {},
            }, null, '\t')
            addFile(compilation, '../config.js', configJsContent)

            // project.config.json
            const userProjectConfigJson = options.projectConfig || {}
            const projectConfigJson = JSON.parse(JSON.stringify(projectConfigJsonTmpl))
            const projectConfigJsonContent = JSON.stringify(_.merge(projectConfigJson, userProjectConfigJson), null, '\t')
            addFile(compilation, '../project.config.json', projectConfigJsonContent)

            // package.json
            const userPackageConfigJson = options.packageConfig || {}
            const packageConfigJson = Object.assign({}, packageConfigJsonTmpl)
            const packageConfigJsonContent = JSON.stringify(_.merge(packageConfigJson, userPackageConfigJson), null, '\t')
            addFile(compilation, '../package.json', packageConfigJsonContent)

            // sitemap.json
            const userSitemapConfigJson = options.sitemapConfig
            if (userSitemapConfigJson) {
                const sitemapConfigJsonContent = JSON.stringify(userSitemapConfigJson, null, '\t')
                addFile(compilation, '../sitemap.json', sitemapConfigJsonContent)
            }

            // node_modules
            addFile(compilation, '../node_modules/.miniprogram', '')

            callback()
        })

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
