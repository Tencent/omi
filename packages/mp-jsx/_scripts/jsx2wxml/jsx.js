"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const babel_generator_1 = require("babel-generator");
const t = require("babel-types");
const lodash_1 = require("lodash");
const constant_1 = require("./constant");
const create_html_element_1 = require("./create-html-element");
const utils_1 = require("./utils");
const adapter_1 = require("./adapter");
function isStartWithWX(str) {
    return str[0] === 'w' && str[1] === 'x';
}
exports.isStartWithWX = isStartWithWX;
const specialComponentName = ['block', 'Block', 'slot', 'Slot'];
function removeJSXThisProperty(path) {
    if (!path.parentPath.isCallExpression()) {
        const p = path.getSibling('property');
        if (p.isIdentifier({ name: 'props' }) ||
            p.isIdentifier({ name: 'state' })) {
            path.parentPath.replaceWithSourceString('this');
        }
        else {
            path.parentPath.replaceWith(p);
        }
    }
}
exports.removeJSXThisProperty = removeJSXThisProperty;
function findJSXAttrByName(attrs, name) {
    for (const attr of attrs) {
        if (!t.isJSXIdentifier(attr.name)) {
            break;
        }
        if (attr.name.name === name) {
            return attr;
        }
    }
    return null;
}
exports.findJSXAttrByName = findJSXAttrByName;
function buildRefTemplate(name, refName, loop, key) {
    const attrs = [
        t.jSXAttribute(t.jSXIdentifier('is'), t.stringLiteral(name)),
        t.jSXAttribute(t.jSXIdentifier('data'), t.stringLiteral(`{{...${refName ? `${loop ? '' : '$$'}${refName}` : '__data'}}}`))
    ];
    if (key) {
        attrs.push(key);
    }
    return t.jSXElement(t.jSXOpeningElement(t.jSXIdentifier('template'), attrs), t.jSXClosingElement(t.jSXIdentifier('template')), []);
}
exports.buildRefTemplate = buildRefTemplate;
function buildJSXAttr(name, value) {
    return t.jSXAttribute(t.jSXIdentifier(name), t.jSXExpressionContainer(value));
}
exports.buildJSXAttr = buildJSXAttr;
function newJSXIfAttr(jsx, value) {
    jsx.openingElement.attributes.push(buildJSXAttr(adapter_1.Adapter.if, value));
}
exports.newJSXIfAttr = newJSXIfAttr;
function setJSXAttr(jsx, name, value, path) {
    const element = jsx.openingElement;
    if (!t.isJSXIdentifier(element.name)) {
        return;
    }
    if (element.name.name === 'Block' || element.name.name === 'block' || !path) {
        jsx.openingElement.attributes.push(t.jSXAttribute(t.jSXIdentifier(name), value));
    }
    else {
        const block = buildBlockElement();
        setJSXAttr(block, name, value);
        block.children = [jsx];
        path.node = block;
    }
}
exports.setJSXAttr = setJSXAttr;
function isAllLiteral(...args) {
    return args.every(p => t.isLiteral(p));
}
exports.isAllLiteral = isAllLiteral;
function buildBlockElement() {
    return t.jSXElement(t.jSXOpeningElement(t.jSXIdentifier('block'), []), t.jSXClosingElement(t.jSXIdentifier('block')), []);
}
exports.buildBlockElement = buildBlockElement;
function parseJSXChildren(children) {
    return children
        .filter(child => {
        return !(t.isJSXText(child) && child.value.trim() === '');
    })
        .reduce((str, child) => {
        if (t.isJSXText(child)) {
            const strings = [];
            child.value.split(/(\r?\n\s*)/).forEach((val) => {
                const value = val.replace(/\u00a0/g, '&nbsp;').trimLeft();
                if (!value) {
                    return;
                }
                if (value.startsWith('\n')) {
                    return;
                }
                strings.push(value);
            });
            return str + strings.join('');
        }
        if (t.isJSXElement(child)) {
            return str + parseJSXElement(child);
        }
        if (t.isJSXExpressionContainer(child)) {
            if (t.isJSXElement(child.expression)) {
                return str + parseJSXElement(child.expression);
            }
            return str + `{${utils_1.decodeUnicode(babel_generator_1.default(child, {
                quotes: 'single',
                jsonCompatibleStrings: true
            })
                .code)
                .replace(/(this\.props\.)|(this\.state\.)/g, '')
                .replace(/(props\.)|(state\.)/g, '')
                .replace(/this\./g, '')
                .replace(/</g, constant_1.lessThanSignPlacehold)}}`;
        }
        return str;
    }, '');
}
function parseJSXElement(element) {
    const children = element.children;
    const { attributes, name } = element.openingElement;
    const TRIGGER_OBSERER = adapter_1.Adapter.type === "swan" /* swan */ ? 'privateTriggerObserer' : '__triggerObserer';
    if (t.isJSXMemberExpression(name)) {
        throw utils_1.codeFrameError(name.loc, '暂不支持 JSX 成员表达式');
    }
    const componentName = name.name;
    const isDefaultComponent = constant_1.DEFAULT_Component_SET.has(componentName);
    const componentSpecialProps = constant_1.SPECIAL_COMPONENT_PROPS.get(componentName);
    const componentTransfromProps = constant_1.TRANSFORM_COMPONENT_PROPS.get(adapter_1.Adapter.type);
    let hasElseAttr = false;
    attributes.forEach((a, index) => {
        if (a.name.name === adapter_1.Adapter.else && !['block', 'Block'].includes(componentName) && !isDefaultComponent) {
            hasElseAttr = true;
            attributes.splice(index, 1);
        }
    });
    if (hasElseAttr) {
        return create_html_element_1.createHTMLElement({
            name: 'block',
            attributes: {
                [adapter_1.Adapter.else]: true
            },
            value: parseJSXChildren([element])
        });
    }
    let attributesTrans = {};
    if (attributes.length) {
        attributesTrans = attributes.reduce((obj, attr) => {
            if (t.isJSXSpreadAttribute(attr)) {
                throw utils_1.codeFrameError(attr.loc, 'JSX 参数暂不支持 ...spread 表达式');
            }
            let name = attr.name.name;
            if (constant_1.DEFAULT_Component_SET.has(componentName)) {
                if (name === 'className') {
                    name = 'class';
                }
            }
            let value = true;
            let attrValue = attr.value;
            if (typeof name === 'string') {
                const isAlipayEvent = adapter_1.Adapter.type === "alipay" /* alipay */ && /(^on[A-Z_])|(^catch[A-Z_])/.test(name);
                if (t.isStringLiteral(attrValue)) {
                    value = attrValue.value;
                }
                else if (t.isJSXExpressionContainer(attrValue)) {
                    let isBindEvent = (name.startsWith('bind') && name !== 'bind') || (name.startsWith('catch') && name !== 'catch');
                    let code = utils_1.decodeUnicode(babel_generator_1.default(attrValue.expression, {
                        quotes: 'single',
                        concise: true
                    }).code)
                        .replace(/"/g, "'")
                        .replace(/(this\.props\.)|(this\.state\.)/g, '')
                        .replace(/this\./g, '');
                    if ("swan" /* swan */ === adapter_1.Adapter.type &&
                        code !== 'true' &&
                        code !== 'false' &&
                        constant_1.swanSpecialAttrs[componentName] &&
                        constant_1.swanSpecialAttrs[componentName].includes(name)) {
                        value = `{= ${code} =}`;
                    }
                    else {
                        if (adapter_1.Adapter.key === name) {
                            const splitCode = code.split('.');
                            if (splitCode.length > 1) {
                                value = splitCode.slice(1).join('.');
                            }
                            else {
                                value = code;
                            }
                        }
                        else {
                            value = isBindEvent || isAlipayEvent ? code : `{{${code}}}`;
                        }
                    }
                    if (adapter_1.Adapter.type === "swan" /* swan */ && name === adapter_1.Adapter.for) {
                        value = code;
                    }
                    if (t.isStringLiteral(attrValue.expression)) {
                        value = attrValue.expression.value;
                    }
                }
                else if (attrValue === null && name !== adapter_1.Adapter.else) {
                    value = `{{true}}`;
                }
                if (constant_1.THIRD_PARTY_COMPONENTS.has(componentName) && /^bind/.test(name) && name.includes('-')) {
                    name = name.replace(/^bind/, 'bind:');
                }
                if (componentTransfromProps && componentTransfromProps[componentName]) {
                    const transfromProps = componentTransfromProps[componentName];
                    Object.keys(transfromProps).forEach(oriName => {
                        if (transfromProps.hasOwnProperty(name)) {
                            name = transfromProps[oriName];
                        }
                    });
                }
                if ((componentName === 'Input' || componentName === 'input') && name === 'maxLength') {
                    obj['maxlength'] = value;
                }
                else if (componentSpecialProps && componentSpecialProps.has(name) ||
                    name.startsWith('__fn_') ||
                    isAlipayEvent) {
                    obj[name] = value;
                }
                else {
                    obj[isDefaultComponent && !name.includes('-') && !name.includes(':') ? lodash_1.kebabCase(name) : name] = value;
                }
            }
            if (!isDefaultComponent && !specialComponentName.includes(componentName)) {
                obj[TRIGGER_OBSERER] = '{{ _triggerObserer }}';
            }
            return obj;
        }, {});
    }
    else if (!isDefaultComponent && !specialComponentName.includes(componentName)) {
        attributesTrans[TRIGGER_OBSERER] = '{{ _triggerObserer }}';
    }
    return create_html_element_1.createHTMLElement({
        name: lodash_1.kebabCase(componentName),
        attributes: attributesTrans,
        value: parseJSXChildren(children)
    });
}
exports.parseJSXElement = parseJSXElement;
function generateHTMLTemplate(template, name) {
    return create_html_element_1.createHTMLElement({
        name: 'template',
        attributes: {
            name
        },
        value: parseJSXElement(template)
    });
}
exports.generateHTMLTemplate = generateHTMLTemplate;
//# sourceMappingURL=jsx.js.map