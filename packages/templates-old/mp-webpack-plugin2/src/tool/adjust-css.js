const postcss = require('postcss')
const tagList = require('./tag-list')

const replaceRegexp = new RegExp(`(\\W|\\b)(${['html', ...tagList].join('|')})(\\W|\\b)`, 'ig')
const prefixRegexp = /[a-zA-Z0-9:.#_-]/
const suffixRegexp = /[a-zA-Z0-9_-]/

/**
 * 替换标签名
 */
const replaceTagNamePlugin = postcss.plugin('replaceTagName', () => root => {
    root.walk(child => {
        if (child.type === 'rule') {
            const selectors = []

            child.selectors.forEach(selector => {
                // 处理标签名选择器
                selector = selector.replace(replaceRegexp, (all, $1, tagName, $2, offset, string) => {
                    // 非标签选择器，调整 \b 匹配的情况
                    let start = $1
                    let end = $2
                    if (!start) start = string[offset - 1] || ''
                    if (!end) end = string[offset + all.length] || ''

                    if (prefixRegexp.test(start) || suffixRegexp.test(end)) {
                        // 非标签选择器
                        return all
                    }

                    tagName = tagName.toLowerCase()

                    if (tagName === 'html') {
                        // 页面单独处理
                        return `${$1}page${$2}`
                    } else if (tagName) {
                        // 其他用原本的标签名
                        return `${$1}.h5-${tagName}${$2}`
                    } else {
                        return all
                    }
                })

                // 处理 * 号选择器
                selector = selector.replace(/(.*)\*(.*)/g, (all, $1, $2) => {
                    if ($2[0] === '=') return all

                    tagList.forEach(tagName => selectors.push(`${$1}.h5-${tagName}${$2}`))

                    selectors.push(`${$1}page${$2}`)

                    return ''
                })

                if (selector.trim()) selectors.push(selector)
            })

            child.selectors = selectors
        }
    })
})

module.exports = function(code) {
    code = postcss([replaceTagNamePlugin]).process(code, {
        from: undefined, // 主要是不想看到那个 warning
        map: null,
    })

    return code.css
}
