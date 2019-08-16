/**
 * 感谢 sizzle：https://github.com/jquery/sizzle/tree/master
 */

const PSEUDO_CHECK = {
    checked: node => node.checked || node.selected,
    disabled: node => node.disabled,
    enabled: node => !node.disabled,
    'first-child': node => node.parentNode.children[0] === node,
    'last-child': node => node.parentNode.children[node.parentNode.children.length - 1] === node,
    'nth-child': (node, param) => {
        const children = node.parentNode.children
        const {a, b} = param
        const index = children.indexOf(node) + 1

        if (a) {
            return (index - b) % a === 0
        } else {
            return index === b
        }
    },
}

const ATTR_CHECK = {
    '=': (nodeVal, val) => nodeVal === val,
    '~=': (nodeVal, val) => nodeVal.split(/\s+/).indexOf(val) !== -1,
    '|=': (nodeVal, val) => nodeVal === val || nodeVal.indexOf(val + '-') === 0,
    '^=': (nodeVal, val) => nodeVal.indexOf(val) === 0,
    '$=': (nodeVal, val) => nodeVal.substr(nodeVal.length - val.length) === val,
    '*=': (nodeVal, val) => nodeVal.indexOf(val) !== -1,
}

const KINSHIP_CHECK = {
    ' ': (node, kinshipRule) => {
        let kinshipNode = node.parentNode

        while (kinshipNode) {
            if (checkHit(kinshipNode, kinshipRule)) return kinshipNode

            kinshipNode = kinshipNode.parentNode
        }

        return null
    },
    '>': (node, kinshipRule) => {
        const kinshipNode = node.parentNode

        return checkHit(kinshipNode, kinshipRule) ? kinshipNode : null
    },
    '+': (node, kinshipRule) => {
        const children = node.parentNode

        for (let i = 0, len = children.length; i < len; i++) {
            const child = children[i]

            if (child === node) {
                const kinshipNode = children[i - 1]

                return checkHit(kinshipNode, kinshipRule) ? kinshipNode : null
            }
        }

        return null
    },
    '~': (node, kinshipRule) => {
        const children = node.parentNode
        let foundCurrent = false

        for (let i = children.length - 1; i >= 0; i--) {
            const child = children[i]

            if (foundCurrent && checkHit(child, kinshipRule)) return child
            if (child === node) foundCurrent = true
        }

        return null
    },
}

/**
 * 检查节点是否符合规则
 */
function checkHit(node, rule) {
    if (!node) return false

    const {
        id, class: classList, tag, pseudo, attr
    } = rule

    // id 选择器
    if (id) {
        if (node.id !== id) return false
    }

    // 类选择器
    if (classList && classList.length) {
        for (const className of classList) {
            if (!node.classList || !node.classList.contains(className)) return false
        }
    }

    // 标签选择器
    if (tag && tag !== '*') {
        if (node.tagName !== tag.toUpperCase()) return false
    }

    // 伪类选择器
    if (pseudo) {
        for (const {name, param} of pseudo) {
            const checkPseudo = PSEUDO_CHECK[name]
            if (!checkPseudo || !checkPseudo(node, param)) return false
        }
    }

    // 属性选择器
    if (attr) {
        for (const {name, opr, val} of attr) {
            const nodeVal = node[name]

            if (nodeVal === undefined) return false
            if (opr) {
                // 存在操作符
                const checkAttr = ATTR_CHECK[opr]
                if (!checkAttr || !checkAttr(nodeVal, val)) return false
            }
        }
    }

    return true
}

/**
 * 数组去重
 */
function unique(list) {
    for (let i = 0; i < list.length; i++) {
        const a = list[i]

        for (let j = i + 1; j < list.length; j++) {
            const b = list[j]
            if (a === b) list.splice(j, 1)
        }
    }

    return list
}

/**
 * 将节点按照文档顺序排列
 */
function sortNodes(list) {
    list.sort((a, b) => {
        const aList = [a]
        const bList = [b]
        let aParent = a.parentNode
        let bParent = b.parentNode

        if (aParent === bParent) {
            // 检查顺序
            const children = aParent.children
            return children.indexOf(a) - children.indexOf(b)
        }

        // a 到根的列表
        while (aParent) {
            aList.unshift(aParent)
            aParent = aParent.parentNode
        }

        // b 到根的列表
        while (bParent) {
            bList.unshift(bParent)
            bParent = bParent.parentNode
        }

        // 找到最近共同祖先
        let i = 0
        while (aList[i] === bList[i]) i++

        // 检查顺序
        const children = aList[i - 1].children
        return children.indexOf(aList[i]) - children.indexOf(bList[i])
    })

    return list
}

class QuerySelector {
    constructor() {
        this.parseCache = {} // 解析查询串缓存
        this.parseCacheKeys = []

        const idReg = '#([\\\\\\w-]+)' // id 选择器
        const tagReg = '\\*|[a-zA-Z-]\\w*' // 标签选择器
        const classReg = '\\.([\\\\\\w-]+)' // 类选择器
        const pseudoReg = ':([\\\\\\w-]+)(?:\\(([^\\(\\)]*|(?:\\([^\\)]+\\)|[^\\(\\)]*)+)\\))?' // 伪类选择器
        const attrReg = '\\[\\s*([\\\\\\w-]+)(?:([*^$|~!]?=)[\'"]?([^\'"\\[]+)[\'"]?)?\\s*\\]' // 属性选择器
        const kinshipReg = '\\s*([>\\s+~](?!=))\\s*' // 亲属选择器
        this.regexp = new RegExp(`^(?:(${idReg})|(${tagReg})|(${classReg})|(${pseudoReg})|(${attrReg})|(${kinshipReg}))`)
    }

    /**
     * 存入解析查询串缓存
     */
    setParseCache(key, value) {
        if (this.parseCacheKeys.length > 50) {
            delete this.parseCache[this.parseCacheKeys.shift()]
        }

        this.parseCacheKeys.push(key)
        this.parseCache[key] = value

        return value
    }

    /**
     * 获取解析查询串缓存
     */
    getParseCache(key) {
        return this.parseCache[key]
    }

    /**
     * 解析查询串
     */
    parse(selector) {
        const segment = [{tag: '*'}]
        const regexp = this.regexp

        const onProcess = (all, idAll, id, tagAll, classAll, className, pseudoAll, pseudoName, pseudoParam, attrAll, attrName, attrOpr, attrVal, kinshipAll, kinship) => {
            if (idAll) {
                // id 选择器
                segment[segment.length - 1].id = id
            } else if (tagAll) {
                // 标签选择器
                segment[segment.length - 1].tag = tagAll.toLowerCase()
            } else if (classAll) {
                // 类选择器
                const currentRule = segment[segment.length - 1]
                currentRule.class = currentRule.class || []

                currentRule.class.push(className)
            } else if (pseudoAll) {
                // 伪类选择器
                const currentRule = segment[segment.length - 1]
                currentRule.pseudo = currentRule.pseudo || []
                pseudoName = pseudoName.toLowerCase()

                const pseudo = {name: pseudoName}

                if (pseudoParam) pseudoParam = pseudoParam.trim()
                if (pseudoName === 'nth-child') {
                    // 处理 nth-child 伪类，参数统一处理成 an + b 的格式
                    pseudoParam = pseudoParam.replace(/\s+/g, '')

                    if (pseudoParam === 'even') {
                        // 偶数个
                        pseudoParam = {a: 2, b: 2}
                    } else if (pseudoParam === 'odd') {
                        // 奇数个
                        pseudoParam = {a: 2, b: 1}
                    } else if (pseudoParam) {
                        // 其他表达式
                        const nthParsed = pseudoParam.match(/^(?:(\d+)|(\d*)?n([+-]\d+)?)$/)

                        if (!nthParsed) {
                            // 解析失败
                            pseudoParam = {a: 0, b: 1}
                        } else if (nthParsed[1]) {
                            // 纯数字
                            pseudoParam = {a: 0, b: +nthParsed[1]}
                        } else {
                            // 表达式
                            pseudoParam = {
                                a: nthParsed[2] ? +nthParsed[2] : 1,
                                b: nthParsed[3] ? +nthParsed[3] : 0,
                            }
                        }
                    } else {
                        // 默认取第一个
                        pseudoParam = {a: 0, b: 1}
                    }
                }
                if (pseudoParam) pseudo.param = pseudoParam

                currentRule.pseudo.push(pseudo)
            } else if (attrAll) {
                // 属性选择器
                const currentRule = segment[segment.length - 1]

                currentRule.attr = currentRule.attr || []
                currentRule.attr.push({
                    name: attrName,
                    opr: attrOpr,
                    val: attrVal
                })
            } else if (kinshipAll) {
                // 亲属选择器
                segment[segment.length - 1].kinship = kinship
                segment.push({tag: '*'}) // 插入新规则
            }

            return ''
        }

        // 逐个选择器解析
        let lastParse
        selector = selector.replace(regexp, onProcess)

        while (lastParse !== selector) {
            lastParse = selector
            selector = selector.replace(regexp, onProcess)
        }

        return selector ? '' : segment
    }

    /**
   * 查询符合条件的节点
   */
    exec(selector, extra) {
        selector = selector.trim().replace(/\s+/g, ' ').replace(/\s*(,|[>\s+~](?!=)|[*^$|~!]?=)\s*/g, '$1')
        const {idMap, tagMap, classMap} = extra

        // 查询缓存
        let segment = this.getParseCache(selector)

        // 无缓存，进行解析
        if (!segment) {
            segment = this.parse(selector)

            // 无法正常解析
            if (!segment) return []

            this.setParseCache(selector, segment)
        }

        // 无解析结果
        if (!segment[0]) return []

        // 执行解析结果
        const lastRule = segment[segment.length - 1] // 从右往左
        const {id, class: classList, tag} = lastRule
        let hitNodes = []

        // 寻找可能符合要求的节点
        if (id) {
            // id 选择器
            const node = idMap[id]
            hitNodes = node ? [node] : []
        } else if (classList && classList.length) {
            // 类选择器
            for (const className of classList) {
                const classNodes = classMap[className]
                if (classNodes) {
                    for (const classNode of classNodes) {
                        if (hitNodes.indexOf(classNode) === -1) hitNodes.push(classNode)
                    }
                }
            }
        } else if (tag && tag !== '*') {
            // 标签选择器，查询指定标签
            const tagName = tag.toUpperCase()
            const tagNodes = tagMap[tagName]
            if (tagNodes) hitNodes = tagNodes
        } else {
            // 标签选择器，查询全部节点
            Object.keys(tagMap).forEach(key => {
                const tagNodes = tagMap[key]
                if (tagNodes) {
                    for (const tagNode of tagNodes) hitNodes.push(tagNode)
                }
            })
        }

        // 从下往上过滤节点列表
        if (hitNodes.length && segment.length) {
            for (let i = hitNodes.length - 1; i >= 0; i--) {
                let checkNode = hitNodes[i]
                let isMatched = false

                // 从右往左进行规则过滤
                for (let j = segment.length - 1; j >= 0; j--) {
                    const prevRule = segment[j - 1]

                    // 检查待选节点，后续的亲属节点不需要再检查
                    if (j === segment.length - 1) isMatched = checkHit(checkNode, lastRule)

                    if (isMatched && prevRule) {
                        // 检查亲属选择器
                        const kinship = prevRule.kinship
                        const checkKinship = KINSHIP_CHECK[kinship]

                        if (checkKinship) checkNode = checkKinship(checkNode, prevRule)

                        if (!checkNode) {
                            // 亲属检查失败
                            isMatched = false
                            break
                        }
                    } else {
                        break
                    }
                }

                if (!isMatched) hitNodes.splice(i, 1) // 不符合，从待选节点列表中删除
            }
        }

        if (hitNodes.length) {
            // 去重、排序
            hitNodes = unique(hitNodes)
            hitNodes = sortNodes(hitNodes)
        }

        return hitNodes
    }
}

module.exports = QuerySelector
