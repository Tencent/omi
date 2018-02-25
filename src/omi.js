import h from './vdom/h'

let Omi = {
    x: h,
    instances: {},
    _instanceId: 0,
    _styleId: 0,
    STYLEPREFIX: '__st_',
    PREFIX: '__s_',
    getInstanceId: function() {
        return Omi._instanceId++
    },
    plugins: {},
    scopedStyle: true,
    mapping: {},
    style: {},
    componentConstructor: {}
}

Omi.getAttr = function(ctor) {
    if (ctor.is) {
        return ctor.is
    }
    let inst = Omi.instances,
        hasAttr = false
    for (var key in inst) {
        if (inst[key].constructor === ctor) {
            hasAttr = true
            ctor.is = Omi.STYLEPREFIX + Omi._styleId
            Omi._styleId++
            return ctor.is
        }
    }
    if (!hasAttr) {
        ctor.is = Omi.STYLEPREFIX + Omi._styleId
        Omi._styleId++
        return ctor.is
    }
}

Omi.$ = function(selector, context) {
    if (context) {
        return context.querySelector(selector)
    } else {
        return document.querySelector(selector)
    }
}

Omi.$$ = function(selector, context) {
    if (context) {
        return Array.prototype.slice.call(context.querySelectorAll(selector))
    } else {
        return Array.prototype.slice.call(document.querySelectorAll(selector))
    }
}

function isServer() {
    return !(typeof window !== 'undefined' && window.document)
}

Omi.render = function(component, renderTo, option) {
    if (isServer()) return
    component.renderTo = typeof renderTo === 'string' ? document.querySelector(renderTo) : renderTo
    if (typeof option === 'boolean') {
        component._omi_increment = option
    } else if (option) {
        component._omi_increment = option.increment
        component.$store = option.store
        if (option.ssr) {
            component.data = Object.assign({}, window.__omiSsrData, component.data)
        }
    }
    component.install()
    component.beforeRender()
    component._render(true)
    component._childrenInstalled(component)
    component.installed()
    component._execInstalledHandlers()
    return component
}

Omi.get = function(name) {
    return Omi.mapping[name]
}

Omi.extendPlugin = function(name, handler) {
    Omi.plugins[name] = handler
}

Omi.deletePlugin = function(name) {
    delete Omi.plugins[name]
}

function spread(vd) {
    let str = ''
    const type = vd.type
    switch (type) {
    case 'VirtualNode':
        str += `<${vd.tagName} ${props2str(vd.props)}>${vd.children.map(child => {
            return spread(child)
        }).join('')}</${vd.tagName}>`
        break
    case 'VirtualText':
        return vd.text
    }

    return str
}

function props2str(props) {
    let result = ''
    for (let key in props) {
        let val = props[key]
        let type = typeof val
        if (type !== 'function' && type !== 'object') {
            result += key + '="' + val + '" '
        }
    }
    return result
}

function spreadStyle() {
    let css = ''
    for (var key in Omi.style) {
        css += `\n${Omi.style[key]}\n`
    }
    return css
}

function stringifyData(component) {
    return '<script>window.__omiSsrData=' + JSON.stringify(component.data) + '</script>'
}

Omi.renderToString = function(component, store) {
    Omi.ssr = true
    component.$store = store
    component.install()
    component.beforeRender()
    component._render(true)
    Omi.ssr = false
    let result = `<style>${spreadStyle()}</style>\n${spread(component._virtualDom)}${stringifyData(component)}`
    Omi.style = {}
    Omi._instanceId = 0
    return result
}

export default Omi
