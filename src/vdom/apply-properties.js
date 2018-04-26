import {getPrototype, isObject} from './util.js'

function removeProperty(node, propName, propValue, previous) {
    if (previous) {
        var previousValue = previous[propName]

        if (propName === 'attributes') {
            for (var attrName in previousValue) {
                node.removeAttribute(attrName)
            }
        } else if (propName === 'style') {
            for (var i in previousValue) {
                node.style[i] = ''
            }
        } else if (typeof previousValue === 'string') {
            node[propName] = ''
            node.removeAttribute(propName)
        } else {
            node[propName] = null
        }
    }
}

function patchObject(node, props, previous, propName, propValue) {
    var previousValue = previous ? previous[propName] : undefined

    // Set attributes
    if (propName === 'attributes') {
        for (var attrName in propValue) {
            var attrValue = propValue[attrName]

            if (attrValue === undefined) {
                node.removeAttribute(attrName)
            } else {
                node.setAttribute(attrName, attrValue)
            }
        }

        return
    }

    if (previousValue && isObject(previousValue) &&
        getPrototype(previousValue) !== getPrototype(propValue)) {
        node[propName] = propValue
        return
    }

    if (!isObject(node[propName])) {
        node[propName] = {}
    }

    var replacer = propName === 'style' ? '' : undefined,
        json = propValue

    if (propName === 'style' && Object.prototype.toString.call(propValue) === '[object Array]') {
        var arr = propValue.slice(0)
        arr.unshift({})

        json = Object.assign.apply(null, arr)
    }

    for (var k in json) {
        var value = json[k]

        node[propName][k] = (value === undefined) ? replacer : value
    }
}

export default function applyProperties(node, props, previous) {
    if (!node.omixEventList) {
        node.omixEventList = {}
    }

    for (var propName in props) {
        var propValue = props[propName]
        if(node.omixEventList[propName]){
            node[propName] = null
        }

        if (propValue === undefined) {
            removeProperty(node, propName, propValue, previous)
        } else {
            if (isObject(propValue)) {
                patchObject(node, props, previous, propName, propValue)
            } else {
                // https://stackoverflow.com/questions/12718186/element-setattributeprop-value-vs-element-prop-value
                if (typeof propValue === 'function') {
                    node[propName.toLowerCase()] = propValue
                    node.omixEventList[propName.toLowerCase()] = true
                    node.omixEventList[propName] = true
                } else {
                    node.setAttribute(propName, propValue)
                }
                if (propName !== 'style') { // fix readonly bug in ios
                    node[propName] = propValue
                }
            }
        }
    }
}
